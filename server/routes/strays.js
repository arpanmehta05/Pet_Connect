const router = require('express').Router();
const { getAllReports, getReportById, createReport } = require('../controllers/strayController');
const { protect } = require('../middleware/auth');

// GET  /api/strays        — public, supports ?type=good|urgent&page=1&limit=20
router.get('/', getAllReports);

// GET  /api/strays/:id    — public
router.get('/:id', getReportById);

// POST /api/strays        — protected (logged-in users only)
router.post('/', protect, createReport);

module.exports = router;
