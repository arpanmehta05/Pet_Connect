const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Pet name is required'],
      trim: true,
      maxlength: [60, 'Pet name cannot exceed 60 characters'],
    },

    species: {
      type: String,
      required: [true, 'Species is required'],
      enum: {
        values: ['dog', 'cat', 'rabbit', 'bird', 'other'],
        message: 'Species must be dog, cat, rabbit, bird, or other',
      },
      lowercase: true,
    },

    breed: {
      type: String,
      required: [true, 'Breed is required'],
      trim: true,
      maxlength: [80, 'Breed cannot exceed 80 characters'],
    },

    age: {
      type: String,
      required: [true, 'Age is required'],
      trim: true,
      maxlength: [20, 'Age string cannot exceed 20 characters'],
    },

    status: {
      type: String,
      required: [true, 'Status (buy/rent) is required'],
      enum: {
        values: ['buy', 'rent'],
        message: 'Status must be either "buy" or "rent"',
      },
      lowercase: true,
    },

    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
      default: '',
    },

    imageURL: {
      type: String,
      trim: true,
      default: '',
      validate: {
        validator: function (v) {
          // allow empty string or a valid URL
          return v === '' || /^https?:\/\/.+/i.test(v);
        },
        message: 'imageURL must be a valid HTTP(S) URL',
      },
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

/* ── Index for common queries ───────────────────── */
petSchema.index({ species: 1, status: 1 });
petSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Pet', petSchema);
