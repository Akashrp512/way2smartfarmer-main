const mongoose = require("mongoose");

const knowledgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

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

module.exports = mongoose.model("Knowledge", knowledgeSchema);
