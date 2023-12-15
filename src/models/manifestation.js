import mongoose from "mongoose";

const ManifestationSchema = new mongoose.Schema({
  location: String,
  date: Date,
  desc: String,
});

const Manifestation =
  mongoose.models.Manifestations || mongoose.model("Manifestations", ManifestationSchema);


  export default Manifestation;