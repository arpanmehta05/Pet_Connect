const router = require('express').Router();
const { getAllPets, getPetById, createPet } = require('../controllers/petController');
const { protect } = require('../middleware/auth');

// GET  /api/pets          — public, supports ?status=buy|rent&species=dog&sort=price_asc&page=1&limit=12
router.get('/', getAllPets);

// GET  /api/pets/:id      — public
router.get('/:id', getPetById);

// POST /api/pets          — protected (logged-in users only)
router.post('/', protect, createPet);

module.exports = router;
