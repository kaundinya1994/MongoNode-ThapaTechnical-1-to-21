const express = require("express");
const app = express();

require("./db/conn");
const Students = require("./models/students");

app.use(express.json());

app.get("/", (req, res) => {
  console.log(" This is root directory");
  res.send(" This is root directory");
});

app.post("/students", (req, res) => {
  console.log(" This is students directory");

  const studentData = new Students(req.body);

  studentData.save((err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);
  });
  res.json(studentData);
});

app.listen(6000, () => {
  console.log("listening on 6000");
});

app.get("/getStudents", (req, res) => {
  const studentData = async () => {
    const studentsInf = await Students.find({});
    res.json(studentsInf);
  };

  studentData();
});

app.post("/asyncFunc", (req, res) => {
  const asyncFunc = async () => {
    const studentInsert = await Students.insertMany([req.body]);
    res.json(studentInsert);
  };

  asyncFunc();
});

app.post("/update", (req, res) => {
  const studentUpdate = async () => {
    var name = req.body.name;
    const student = await Students.findOneAndUpdate(
      { name: name },
      { $set: { email: req.body.email } },
      { new: true }
    );
    console.log("\n From Update\n ", student);
    res.json(student);
  };

  studentUpdate();
});

app.post("/delete", (req, res) => {
  const deleteStudent = async () => {
    const deletedStudent = await Students.findOneAndDelete({
      name: req.body.name,
    });

    console.log("\n From Update\n ", deletedStudent);
    res.json(deletedStudent);
  };

  deleteStudent();
});
// const studentData = () => {
//   const student = new studentModel({
//     name: "Student",
//     age: 12,
//   });
//   const studentInfo = studentModel.insertOne();
//   console.log(studentInfo);
// };

// studentData();

// const playlist = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     lowercase: true,
//     trim: true,
//     minlength: 2,
//     maxlength: 15,
//   },
//   ctype: { type: String, enum: ["Backend", "Database", "Frontend"] },
//   videos: {
//     type: Number,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Video count cant be negative");
//       }
//     },
//   },
//   email: {
//     type: String,
//     validate(value) {
//       if (!validator.isEmail()) {
//         throw new Error("Please enter a valid email address");
//       }
//     },
//   },
//   active: Boolean,
//   author: String,
//   date: { type: Date, default: Date.now() },
// });

// const PlaylistModel = new mongoose.model("PlaylistModel", playlist);

// Because lowercase : true is set name field will be converted to lowercase alphabets
// trim : true is set  so it'll remove front nd trailing spaces of the name field "    mongo    "  --> "mongo"
// minlength and maxlength will bound length of string
// enum will check if the input string is in given array values

// min and max are validator for number type

// min and max are validator for date type

// // You can use validate function to have custom validation message
// const insertPlaylistData = async () => {
//   try {
//     const expressPlaylist = new PlaylistModel({
//       name: "Express JS",
//       ctype: "Backend",
//       videos: 50,
//       active: true,
//       email: "kaundinya@gmail.com",
//       author: "Kaundi gadu",
//     });

//     const mongoPlaylist = new PlaylistModel({
//       name: "Mongo JS",
//       ctype: "Database",
//       videos: 50,
//       active: true,
//       email: "kaundinya@gma.om",
//       author: "Kaundi gadu",
//     });

//     const reactPlaylist = new PlaylistModel({
//       name: "React JS",
//       ctype: "Frontend",
//       videos: 50,
//       active: true,
//       author: "Kaundi gadu",
//     });

//     const playlistData = await PlaylistModel.insertMany([
//       expressPlaylist,
//       mongoPlaylist,
//       reactPlaylist,
//     ]);
//   } catch (err) {
//     console.log(err);
//   }
// };
// insertPlaylistData();
