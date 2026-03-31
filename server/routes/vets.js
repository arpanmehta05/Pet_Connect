const router = require('express').Router();
const { bookAppointment, getMyAppointments, cancelAppointment } = require('../controllers/vetController');
const { protect } = require('../middleware/auth');

// All vet routes require authentication
router.use(protect);

// POST  /api/vets/book                         — book a new appointment
router.post('/book', bookAppointment);

// GET   /api/vets/appointments                 — list my appointments
router.get('/appointments', getMyAppointments);

// PATCH /api/vets/appointments/:id/cancel      — cancel an appointment
router.patch('/appointments/:id/cancel', cancelAppointment);

module.exports = router;
