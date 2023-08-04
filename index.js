// app.js (atau nama file yang sesuai)
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Koneksi ke MongoDB
async function connectToMongoDB() {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToMongoDB();

// Definisikan model dan skema Mongoose (contoh)
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

// Tambahkan rute untuk mengakses data dari MongoDB
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Tambahkan rute lain sesuai kebutuhan aplikasi Anda

// Jalankan server Express
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
