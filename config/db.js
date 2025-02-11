// db.js
// import { createConnection } from "mongoose";
import mongoose from "mongoose";

const connectionUri = process.env.MONGO_URI;
const options = {
  dbName: "track",
};

const configDb = mongoose
  .connect(connectionUri, options)
  .then(() => {
    console.log('Connected to the "track" database using mongoose');
  })
  .catch((err) => {
    console.error("Error connecting with mongoose.connect:", err);
  });

export default configDb;
