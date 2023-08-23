const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017";
// const URL = "mongodb+srv://ask:0112553@project.glnucbi.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to mongo");
    })
    .catch(() => {
      throw new Error("Could not connect");
    });
};

module.exports = connectToMongo;
