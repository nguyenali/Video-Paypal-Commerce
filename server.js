// setting the environment vars in development
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ extname: "handlebars" });
// const sequelize = require("sequelize");

// importing models
const { Purchase, Video, User } = require("./models");

// Paypal client id
const clientId = process.env.PAYPAL_CLIENT_ID;

// import sequelize connection
const sq_connection = require("./config/connection");

// Setting the port
const PORT = process.env.PORT || 3000;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

const customerOrders = {};

// used to convert json sent in post bodies
app.use(express.json());
app.use(express.urlencoded( { extended: true } ))

app.get("/", (req, res) => {
  res.render("homepage", { clientId: clientId });
});

// Will be needed to return all items currently in the cart
app.post("/checkout", (req, res) => {
  // customerOrders[req.body.customerId] = req.body.cartItems
  customerOrders[req.body.customerId] = req.body.cart;
  res.send({ cartSaved: true });
});

app.get("/checkout/:id", async (req, res) => {
  res.render("checkoutpage", {
    clientId: clientId,
    cart: encodeURIComponent(JSON.stringify(customerOrders[req.params.id])),
  });
});

app.post("/purchase", async (req, res) => {
  // Ideally, we would verify the purchase

  // save purchase to db
  // Purchase.create({
  //   client_id: req.body.client_id,
  //   payment_usd: req.body.payment_usd,
  //   video_id: req.body.videos,
  // });

  const { client_id, payment_usd, videos } = req.body

  

  res.send(true)

});

sq_connection.sync();

app.listen(PORT, console.log(`App listening on port ${PORT}...`));
