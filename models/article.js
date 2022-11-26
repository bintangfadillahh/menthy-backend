const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
