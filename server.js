const express = require("express");
const dotenv = require("dotenv").config();
const userRoute = require("./src/api/user/routes/user");
const productRoute = require("./src/api/products/routes/products");
const { connect } = require("http2");
const connectDB = require("./config/dbConnection");

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//ROUTES
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
// app.use("/api/carts", require("./src/api/cart/routes/cart"));
app.get("/", (req, res) => {
  res.status(200).json( "successfully deployed...." );
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running...." });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
