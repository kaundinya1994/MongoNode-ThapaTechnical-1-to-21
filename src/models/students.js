const mongoose = require("mongoose");


const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
  },
});

const Students = new mongoose.model("Students", studentSchema);

module.exports = Students;
