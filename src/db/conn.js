const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/studentDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Success\n ");
  });
