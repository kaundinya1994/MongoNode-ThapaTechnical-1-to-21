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
    const expressPlaylist = new PlaylistModel({
      name: "express JS",
      ctype: "Backend",
      videos: 50,
      active: true,
      author: "Kaundi gadu",
    });

    const mongoPlaylist = new PlaylistModel({
      name: "mongo JS",
      ctype: "Database",
      videos: 50,
      active: true,
      author: "Kaundi gadu",
    });

    const reactPlaylist = new PlaylistModel({
      name: "react JS",
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
// insertPlaylistData();

const getPlaylist = async () => {
  //   const playlistData = await PlaylistModel.find();

  // Get name of videos : 50
  //   const playlistData = await PlaylistModel.find({ videos: 50 }, { name: 1 });

  //   Get name, videos for no of videos > 40
  //   const playlistData = await PlaylistModel.find(
  //     { videos: { $gt: 40 } },
  //     { name: 1, videos: 1 }
  //   );

  // Get data matching in an array
  const playlistData = await PlaylistModel.find({ videos: { $in: [66, 77] } });
  // console.log(playlistData);

  // Get data matching not in an array
  // const playlistData = await PlaylistModel.find({ videos: { $nin: [66, 77] } });
  if (!playlistData[0]) {
    console.log(" Data doesn't exist");
  } else {
    console.log(playlistData);
  }
};

getPlaylist();
