const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  //   title: String,
  //   content: String,
  //   author: String,
  //   tags: Array,
  //   linkedinProfile: String,
  //   category: String,
  //   createdAt: String,
  //   updatedAt: String,
  //   publishedAt: String,
  data: Array,
});

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = { BlogModel };
