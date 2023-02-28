const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema({
  monthly_price_insight: {
    type: String,
    required: [true, "Please enter monthly price insight"],
  },

  quarterly_price_insight: {
    type: String,
    required: [true, "Please enter quarterly price insight"],
  },

  seasonal_price_insight: {
    type: String,
    required: [true, "Please enter seasonal price insight"],
  },

  monthly_summary_insight: {
    type: String,
    required: [true, "Please enter monthly summary insight"],
  },

  quarterly_summary_insight: {
    type: String,
    required: [true, "Please enter quarterly summary insight"],
  },

  seasonal_summary_insight: {
    type: String,
    required: [true, "Please enter seasonal summary insight"],
  },
  monthly_bull_insight: {
    type: String,
    required: [true, "Please enter monthly bull insight"],
  },

  quarterly_bull_insight: {
    type: String,
    required: [true, "Please enter quarterly bull insight"],
  },

  seasonal_bull_insight: {
    type: String,
    required: [true, "Please enter seasonal bull insight"],
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Insight", insightSchema);
