require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
console.log("UserModel is:", UserModel);

const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();

  res.send("Order saved");
  
});

app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/signup", async (req, res) => {
  console.log("Signup route hit");

  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    console.log("Signup Error:", err);
    res.status(500).json({ error: err.message });
  }
});



mongoose.connect(url)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(PORT, () => {
  console.log("Hey!, Our Server is working");
});
