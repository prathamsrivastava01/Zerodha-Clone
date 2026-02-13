require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");

const PORT = process.env.PORT || port;
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

mongoose.connect(url)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(PORT, () => {
  console.log("Hey!, Our Server is working");
});
