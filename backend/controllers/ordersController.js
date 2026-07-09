// // const { OrdersModel } = require("./model/OrdersModel");
// const { OrdersModel } = require("../model/OrdersModel");

// app.post("/newOrder", async (req, res) => {
//   console.log("Order received:", req.body);

//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   await newOrder.save();

//   console.log("Order saved!");

//   res.send("Order Saved!");
// });

const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");


const createOrder = async (req, res) => {
  try {
    console.log("Order received:", req.body);

    const newOrder = new OrdersModel({
      userId: req.user.userId,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    let holding = await HoldingsModel.findOne({
    userId: req.user.userId,
    name: req.body.name,
    });

    if (holding) {
    holding.qty += Number(req.body.qty);

    holding.avg =
        ((holding.avg * (holding.qty - Number(req.body.qty))) +
            (Number(req.body.price) * Number(req.body.qty))) /
        holding.qty;

    holding.price = Number(req.body.price);

    await holding.save();
    } else {
        const newHolding = new HoldingsModel({
            userId: req.user.userId,
            name: req.body.name,
            qty: Number(req.body.qty),
            avg: Number(req.body.price),
            price: Number(req.body.price),
            net: "0%",
            day: "0%",
        });

        await newHolding.save();

        let position = await PositionsModel.findOne({
          userId: req.user.userId,
          name: req.body.name,
        });

        if (position) {
          const oldQty = position.qty;

          position.qty += Number(req.body.qty);

          position.avg =
            ((position.avg * oldQty) + (Number(req.body.price) * Number(req.body.qty))) /
            position.qty;

          position.price = Number(req.body.price);

          await position.save();
          } else {
          await PositionsModel.create({
            userId: req.user.userId,
            product: "CNC",
            name: req.body.name,
            qty: Number(req.body.qty),
            avg: Number(req.body.price),
            price: Number(req.body.price),
            net: "0%",
            day: "0%",
            isLoss: false,
          });
        }

    }

    console.log("Order Saved!");

    res.status(201).json({
      message: "Order Saved!",
    });

  } catch (err) {
    res.status(500).json({
      message: "Error creating order",
      error: err.message,
    });
  }
};

const getOrders = async (req,res)=>{

    try{

        const orders = await OrdersModel.find({
            userId:req.user.userId
        });

        res.json(orders);

    }catch(err){

        res.status(500).json({
            message:"Unable to fetch orders"
        });

    }

}

module.exports = {
  createOrder,
  getOrders,
};