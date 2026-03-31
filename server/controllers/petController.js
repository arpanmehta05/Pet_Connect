const Pet = require('../models/Pet');

/* ── GET /api/pets ──────────────────────────────── */
exports.getAllPets = async (req, res, next) => {
  try {
    const { status, species, sort, page = 1, limit = 12 } = req.query;

    // Build filter object
    const filter = {};
    if (status && ['buy', 'rent'].includes(status.toLowerCase())) {
      filter.status = status.toLowerCase();
    }
    if (species && ['dog', 'cat', 'rabbit', 'bird', 'other'].includes(species.toLowerCase())) {
      filter.species = species.toLowerCase();
    }

    // Sorting
    let sortObj = { createdAt: -1 }; // newest first by default
    if (sort === 'price_asc') sortObj = { price: 1 };
    if (sort === 'price_desc') sortObj = { price: -1 };
    if (sort === 'name') sortObj = { name: 1 };

    // Pagination
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 12));
    const skip = (pageNum - 1) * limitNum;

    // Execute query + count in parallel
    const [pets, total] = await Promise.all([
      Pet.find(filter)
        .sort(sortObj)
        .skip(skip)
        .limit(limitNum)
        .populate('owner', 'name email')
        .lean(),
      Pet.countDocuments(filter),
    ]);

    res.json({
      pets,
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

/* ── GET /api/pets/:id ──────────────────────────── */
exports.getPetById = async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id)
      .populate('owner', 'name email')
      .lean();

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.json({ pet });
  } catch (err) {
    // Invalid ObjectId format
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Pet not found' });
    }
    next(err);
  }
};

/* ── POST /api/pets  (protected) ────────────────── */
exports.createPet = async (req, res, next) => {
  try {
    const { name, species, breed, age, status, price, description, imageURL } = req.body;

    const pet = await Pet.create({
      name,
      species,
      breed,
      age,
      status,
      price,
      description,
      imageURL,
      owner: req.user._id,
    });

    res.status(201).json({ message: 'Pet listing created', pet });
  } catch (err) {
    next(err);
  }
};
