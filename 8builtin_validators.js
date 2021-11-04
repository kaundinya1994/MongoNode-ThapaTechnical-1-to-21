const mongoose = require("mongoose");
// Schema builtin validation
// https://mongoosejs.com/docs/validation.html

// {unique:true} is not a validator
mongoose.connect("mongodb://localhost:27017/kaundiplaylist").then(() => {
  console.log("DB Connection Success ");
});

const playlist = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 2,
    maxlength: 15,
  },
  ctype: { type: String, enum: ["Backend", "Database", "Frontend"] },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Video count cant be negative");
      }
    },
  },
  active: Boolean,
  author: String,
  date: { type: Date, default: Date.now() },
});

const PlaylistModel = new mongoose.model("PlaylistModel", playlist);

// Because lowercase : true is set name field will be converted to lowercase alphabets
// trim : true is set  so it'll remove front nd trailing spaces of the name field "    mongo    "  --> "mongo"
// minlength and maxlength will bound length of string
// enum will check if the input string is in given array values

// min and max are validator for number type

// min and max are validator for date type

// You can use validate function to have custom validation message
const insertPlaylistData = async () => {
  try {
    const expressPlaylist = new PlaylistModel({
      name: "Express JS",
      ctype: "Backend",
      videos: 50,
      active: true,
      author: "Kaundi gadu",
    });

    const mongoPlaylist = new PlaylistModel({
      name: "Mongo JS",
      ctype: "Database",
      videos: 50,
      active: true,
      author: "Kaundi gadu",
    });

    const reactPlaylist = new PlaylistModel({
      name: "React JS",
      ctype: "Frontend",
      videos: 50,
      active: true,
      author: "Kaundi gadu",
    });

    const playlistData = await PlaylistModel.insertMany([
      expressPlaylist,
      mongoPlaylist,
      reactPlaylist,
    ]);
  } catch (err) {
    console.log(err);
  }
};
insertPlaylistData();
