// backend/config/db.js

// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("atuljoshi1206/.... // key", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Atlas connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require('mongoose');

// const MONGO_URI = "mongodb+srv://atuljoshi1206:<irwdCEsNOyxBuHoC>@weatherdb.uxofl.mongodb.net/"; // Replace with your actual MongoDB Atlas URI

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB Atlas connected');
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
