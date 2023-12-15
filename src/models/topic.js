import mongoose from "mongoose";
import Manifestation from "./manifestation";
import Donation from "./donation";

const TopicSchema = new mongoose.Schema({
  title: String,
  desc: String,
  location: String,
  callToAction: {
    manifestation: {
        exist: Boolean,
        manifs: [Manifestation]
    },
    donation: {
        exist: Boolean,
        donations: [Donation]
    }
  }
});

const Topic =
  mongoose.models.Topics || mongoose.model("Topics", TopicSchema);


  export default Topic;