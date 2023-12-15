import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  title: String,
  topics: [
    {
    title: String,
    desc: String,
    location: String,
    image: String,
    manifs: [{
      location: String,
      date: Date,
      desc: String,
    }],
    donations: [{
      company: String,
      desc: String,
    }]
  }],
});

const Section =
  mongoose.models.Sections || mongoose.model("Sections", SectionSchema);


  export default Section;