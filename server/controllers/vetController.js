const Appointment = require('../models/Appointment');

/* ── POST /api/vets/book  (protected) ───────────── */
exports.bookAppointment = async (req, res, next) => {
  try {
    const { vetName, petName, date, time, notes } = req.body;

    // Check for duplicate booking (same user, same vet, same date+time)
    const duplicate = await Appointment.findOne({
      user: req.user._id,
      vetName,
      date: new Date(date),
      time,
      status: { $nin: ['cancelled'] },
    });

    if (duplicate) {
      return res.status(409).json({
        message: 'You already have a booking with this vet at that date and time',
      });
    }

    const appointment = await Appointment.create({
      user: req.user._id,
      vetName,
      petName,
      date,
      time,
      notes,
    });

    res.status(201).json({ message: 'Appointment booked', appointment });
  } catch (err) {
    next(err);
  }
};

/* ── GET /api/vets/appointments  (protected) ────── */
exports.getMyAppointments = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const filter = { user: req.user._id };
    if (status && ['pending', 'confirmed', 'completed', 'cancelled'].includes(status)) {
      filter.status = status;
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    const [appointments, total] = await Promise.all([
      Appointment.find(filter)
        .sort({ date: -1, time: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean(),
      Appointment.countDocuments(filter),
    ]);

    res.json({
      appointments,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (err) {
    next(err);
  }
};

/* ── PATCH /api/vets/appointments/:id/cancel  (protected) */
exports.cancelAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.status === 'cancelled') {
      return res.status(400).json({ message: 'Appointment is already cancelled' });
    }

    if (appointment.status === 'completed') {
      return res.status(400).json({ message: 'Cannot cancel a completed appointment' });
    }

    appointment.status = 'cancelled';
    await appointment.save();

    res.json({ message: 'Appointment cancelled', appointment });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    next(err);
  }
};
