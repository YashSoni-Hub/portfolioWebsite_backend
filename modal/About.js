import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  subtitle: String,
  description: String,
  quote: String,
  avatar: {
    public_id: String,
    url: String,
  },
});

export const About = mongoose.model("about", aboutSchema);
