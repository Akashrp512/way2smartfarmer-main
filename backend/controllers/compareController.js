const Compare = require("../models/compareModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const SearchFeatures = require("../utils/searchFeatures");

// Get All Compares
exports.getAllCompares = asyncErrorHandler(async (req, res, next) => {
  // console.log(req.query);

  const searchFeature = new SearchFeatures(Compare.find(), req.query)
    .search()
    .filter();

  let compares = await searchFeature.query;

  compares = await searchFeature.query.clone();

  res.status(200).json({
    success: true,
    compares,
  });
});

// Get Compare Details
exports.getCompareDetails = asyncErrorHandler(async (req, res, next) => {
  const compare = await Compare.findById(req.params.id);

  if (!compare) {
    return next(new ErrorHandler("Compare Details not Found", 404));
  }

  res.status(200).json({
    success: true,
    compare,
  });
});

// Create Compare ---ADMIN
exports.createCompare = asyncErrorHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const compare = await Compare.create(req.body);

  res.status(201).json({
    success: true,
    compare,
  });
});
