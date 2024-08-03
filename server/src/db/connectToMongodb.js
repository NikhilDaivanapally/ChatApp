import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToMongodb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
  } catch (error) {
    console.log("MONGODB Connection error", error);
    process.exit(1);
    //  given by node to terminate the node process due to node process failure
  }
};

export default connectToMongodb;
