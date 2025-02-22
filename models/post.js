import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: string,
    img: string,
    Content: string,
  },
  {
    timestamps: true,
  },
  { collection: "posts" },

);

const Post = mongoose.model.Post || mongoose.model("Post", postSchema);
export default Post;