const mongoose = require("mongoose");

const compareSchema = new mongoose.Schema({
  monthly_price_comp: {
    type: String,
    required: [true, "Please enter monthly price compare"],
  },

  quarterly_price_comp: {
    type: String,
    required: [true, "Please enter quarterly price compare"],
  },

  seasonal_price_comp: {
    type: String,
    required: [true, "Please enter seasonal price compare"],
  },

  monthly_summary_comp: {
    type: String,
    required: [true, "Please enter monthly summary compare"],
  },

  quarterly_summary_comp: {
    type: String,
    required: [true, "Please enter quarterly summary compare"],
  },

  seasonal_summary_comp: {
    type: String,
    required: [true, "Please enter seasonal summary compare"],
  },
  monthly_bull_comp: {
    type: String,
    required: [true, "Please enter monthly bull compare"],
  },

  quarterly_bull_comp: {
    type: String,
    required: [true, "Please enter quarterly bull compare"],
  },

  seasonal_bull_comp: {
    type: String,
    required: [true, "Please enter seasonal bull compare"],
  },
  monthly_bear_comp: {
    type: String,
    required: [true, "Please enter monthly bear compare"],
  },

  quarterly_bear_comp: {
    type: String,
    required: [true, "Please enter quarterly bear compare"],
  },

  seasonal_bear_comp: {
    type: String,
    required: [true, "Please enter seasonal bear compare"],
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

module.exports = mongoose.model("Compare", compareSchema);
