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

// const updateInfo = async (id) => {
//   const updatedData = await PlaylistModel.updateOne(
//     { _id: id },
//     { $set: { name: "ExpressJs" } }
//   );
//   console.log("id updated", updatedData);
// };

const updateInfo = async (id) => {
  const updatedData = await PlaylistModel.findByIdAndUpdate(
    { _id: id },
    { $set: { name: "ExpressJs" } },
    { new: true } // This is a option to get the result of the current updated document
  );
  console.log(
    "id updated using findByIdAndUpdate \n This gives result : \n",
    updatedData
  );
};

updateInfo("617a5527acbb5752508219db");
