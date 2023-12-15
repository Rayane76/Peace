import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const AdminAccount =
  mongoose.models.AdminAccounts || mongoose.model("AdminAccounts", AdminSchema);


  export default AdminAccount;