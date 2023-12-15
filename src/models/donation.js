import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  company: String,
  desc: String,
});

const Donation =
  mongoose.models.Donations || mongoose.model("Donations", DonationSchema);


  export default Donation;