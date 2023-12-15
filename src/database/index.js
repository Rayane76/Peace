import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/peace")
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => console.log(e));
};

export default connectToDB;