import mongoose from "mongoose";
import Topic from "./topic";

const SectionSchema = new mongoose.Schema({
  title: String,
  topics: [Topic]
});

const Section =
  mongoose.models.Sections || mongoose.model("Sections", SectionSchema);


  export default Section;