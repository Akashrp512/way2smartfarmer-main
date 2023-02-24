const Knowledge = require("../models/knowledgeModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const SearchFeatures = require("../utils/searchFeatures");
const cloudinary = require("cloudinary");

// Get All Knowledges
exports.getAllKnowledges = asyncErrorHandler(async (req, res, next) => {
  const resultPerPage = 12;
  const knowlegeCount = await Knowledge.countDocuments();
  // console.log(req.query);

  const searchFeature = new SearchFeatures(Knowledge.find(), req.query)
    .search()
    .filter();

  let knowledges = await searchFeature.query;
  let filteredKnowledgesCount = knowledges.length;

  searchFeature.pagination(resultPerPage);

  knowledges = await searchFeature.query.clone();

  res.status(200).json({
    success: true,
    knowledges,
    knowlegeCount,
    resultPerPage,
    filteredKnowledgesCount,
  });
});

// Create Knowledge ---ADMIN
exports.createKnowledge = asyncErrorHandler(async (req, res, next) => {
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "knowledge",
    });

    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLink;
  req.body.user = req.user.id;

  const knowledge = await Knowledge.create(req.body);

  res.status(201).json({
    success: true,
    knowledge,
  });
});
