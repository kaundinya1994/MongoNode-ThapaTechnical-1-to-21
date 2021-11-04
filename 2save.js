const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kaundiplaylist").then(() => {
  console.log("DB Connection Success ");
});

const playlist = new mongoose.Schema({
  name: { type: String, required: true },
  ctype: String,
  videos: Number,
  active: Boolean,
  author: String,
  date: { type: Date, default: Date.now() },
});

const PlaylistModel = new mongoose.model("PlaylistModel", playlist);

const insertPlaylistData = async () => {
  try {
    const reactPlaylist = new PlaylistModel({
      name: "Node JS",
      ctype: "Backend",
      videos: 50,
      active: true,
      author: "Kaundi gadu",
    });
    const reactPlaylistData = await reactPlaylist.save();
    console.log(reactPlaylistData);

  } catch (err) {
    console.log(err);
  }
};

insertPlaylistData();
