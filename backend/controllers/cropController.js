const Crop = require("../models/cropModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const SearchFeatures = require("../utils/searchFeatures");
const cloudinary = require("cloudinary");

// Get All Crops
exports.getAllCrops = asyncErrorHandler(async (req, res, next) => {
  const resultPerPage = 12;
  const cropCount = await Crop.countDocuments();
  // console.log(req.query);

  const searchFeature = new SearchFeatures(Crop.find(), req.query)
    .search()
    .filter();

  let crops = await searchFeature.query;
  let filteredCropsCount = crops.length;

  searchFeature.pagination(resultPerPage);

  crops = await searchFeature.query.clone();

  res.status(200).json({
    success: true,
    crops,
    cropCount,
    resultPerPage,
    filteredCropsCount,
  });
});

// Create Crop ---ADMIN
exports.createCrop = asyncErrorHandler(async (req, res, next) => {
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "crops",
    });

    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLink;
  req.body.user = req.user.id;

  const crop = await Crop.create(req.body);

  res.status(201).json({
    success: true,
    crop,
  });
});

// Get Crop Details
exports.getCropDetails = asyncErrorHandler(async (req, res, next) => {
  const crop = await Crop.findById(req.params.id);

  if (!crop) {
    return next(new ErrorHandler("Crop Not Found", 404));
  }

  res.status(200).json({
    success: true,
    crop,
  });
});

// Get All Crops ---ADMIN
exports.getAdminCrops = asyncErrorHandler(async (req, res, next) => {
  const crops = await Crop.find();

  res.status(200).json({
    success: true,
    crops,
  });
});
