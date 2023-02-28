const Compare = require("../models/compareModel");
const Insight = require("../models/InsightModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const SearchFeatures = require("../utils/searchFeatures");

// Get All Insights
exports.getAllInsights = asyncErrorHandler(async (req, res, next) => {
  // console.log(req.query);

  const searchFeature = new SearchFeatures(Insight.find(), req.query)
    .search()
    .filter();

  let insights = await searchFeature.query;

  insights = await searchFeature.query.clone();

  res.status(200).json({
    success: true,
    insights,
  });
});

// Create Insight ---ADMIN
exports.createInsight = asyncErrorHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const insight = await Insight.create(req.body);

  res.status(201).json({
    success: true,
    insight,
  });
});

// Get Crop Details
exports.getInsightDetails = asyncErrorHandler(async (req, res, next) => {
  const insight = await Insight.findById(req.params.id);

  if (!insight) {
    return next(new ErrorHandler("Insight Not Found", 404));
  }

  res.status(200).json({
    success: true,
    insight,
  });
});
