var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");

// connect to the database
connectToDatabase().catch((err) => console.log(err, process.env.DB_USER));

async function connectToDatabase() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@bimune5n.6dwsleg.mongodb.net/bimune5npecset?retryWrites=true`,
    { useUnifiedTopology: true }
  );
}

const pecsetprobaSchema = new mongoose.Schema({
  pecset: String,
  megadottJelszo: String,
  helyesJelszo: String,
  elfogadva: Boolean,
  time: Date,
});

const Pecsetproba = mongoose.model("Pecsetproba", pecsetprobaSchema);

// upload a new pecsetproba
router.post("/upload", async (req, res) => {
  console.log(Pecsetproba);
  const proba = new Pecsetproba({
    pecset: req.body.pecset,
    megadottJelszo: req.body.megadottJelszo,
    helyesJelszo: req.body.helyesJelszo,
    elfogadva: req.body.elfogadva,
    time: new Date(),
  });
  try {
    await proba.save();
    console.log(proba);
    res.status(201).send("Oksa");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get all pecsetprobak
router.get("/getall", async (req, res) => {
  try {
    const pecsetprobak = await Pecsetproba.find();
    pecsetprobak.sort(function (a, b) {
      const stringA = a.time.toString();
      const stringB = b.time.toString();
      return stringB.localeCompare(stringA);
    });
    res.json(pecsetprobak);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
