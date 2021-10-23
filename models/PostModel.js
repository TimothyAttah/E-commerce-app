import mongoose from "mongoose";

const PostModel = mongoose.Schema( {
  user: String,
  imgName: String,
  text: String,
  avatar: String,
  timestamp: String
} );

export default mongoose.model( 'posts', PostModel );
