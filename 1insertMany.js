const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kaundiPrac").then(() => {
  console.log("DB conn success");
});

const MobileSchema = new mongoose.Schema({
  name: String,
  cost: Number,
});

const MobileModel = new mongoose.model("MobileModel", MobileSchema);

const mobileDataInsert = async () => {
  const MobileInfo1 = new MobileModel({
    name: "Oppo F5",
    cost: 15000,
  });

  const MobileInfo2 = new MobileModel({
    name: "Oppo F5",
    cost: 15000,
  });
  const mobileData = await MobileModel.insertMany([MobileInfo1, MobileInfo2]);
  console.log(mobileData);
};

mobileDataInsert();
