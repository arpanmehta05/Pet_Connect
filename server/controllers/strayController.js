const StrayReport = require('../models/StrayReport');

/* ── GET /api/strays ────────────────────────────── */
exports.getAllReports = async (req, res, next) => {
  try {
    const { type, page = 1, limit = 20 } = req.query;

    // Build filter
    const filter = {};
    if (type && ['good', 'urgent'].includes(type.toLowerCase())) {
      filter.type = type.toLowerCase();
    }

    // Pagination
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const [reports, total] = await Promise.all([
      StrayReport.find(filter)
        .sort({ createdAt: -1 }) // newest first
        .skip(skip)
        .limit(limitNum)
        .populate('reportedBy', 'name email')
        .lean(),
      StrayReport.countDocuments(filter),
    ]);

    res.json({
      reports,
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

/* ── GET /api/strays/:id ────────────────────────── */
exports.getReportById = async (req, res, next) => {
  try {
    const report = await StrayReport.findById(req.params.id)
      .populate('reportedBy', 'name email')
      .lean();

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.json({ report });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Report not found' });
    }
    next(err);
  }
};

/* ── POST /api/strays  (protected) ──────────────── */
exports.createReport = async (req, res, next) => {
  try {
    const { type, title, description, location } = req.body;

    const report = await StrayReport.create({
      type,
      title,
      description,
      location,
      reportedBy: req.user._id,
    });

    // Populate reporter info before returning
    await report.populate('reportedBy', 'name email');

    res.status(201).json({ message: 'Report submitted', report });
  } catch (err) {
    next(err);
  }
};
