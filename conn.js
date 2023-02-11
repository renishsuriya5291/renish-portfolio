const mongoose = require("mongoose");
const DB = "mongodb+srv://renish:renidh4707@cluster0.qiyfmu6.mongodb.net/?retryWrites=true&w=majority";

// const DB = "mongodb+srv://aggregateagro:WNz2B0yMLJIxWccR@cluster0.1dwperj.mongodb.net/?retryWrites=true&w=majority";f

mongoose.set("strictQuery", false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection Start");
  })
  .catch((error) => {
    console.log("err" + error);
  });


