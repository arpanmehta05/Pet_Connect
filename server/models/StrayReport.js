const mongoose = require('mongoose');

const strayReportSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Report type is required'],
      enum: {
        values: ['good', 'urgent'],
        message: 'Type must be either "good" or "urgent"',
      },
      lowercase: true,
    },

    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },

    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
      maxlength: [200, 'Location cannot exceed 200 characters'],
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Reporter (user) reference is required'],
    },

    resolved: {
      type: Boolean,
      default: false,
    },

    helpersCount: {
      type: Number,
      default: 0,
      min: [0, 'Helpers count cannot be negative'],
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

/* ── Index for feed queries ─────────────────────── */
strayReportSchema.index({ type: 1, createdAt: -1 });
strayReportSchema.index({ reportedBy: 1 });

module.exports = mongoose.model('StrayReport', strayReportSchema);
