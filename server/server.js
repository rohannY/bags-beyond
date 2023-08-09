require("dotenv").config();
const cors = require("cors");
const express = require("express");
const clc = require("cli-color");
const connectDB = require("./configs/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/orders.routes");

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user",userRoutes);
app.use("/products",productRoutes);
app.use("/admin",adminRoutes);
app.use("/order",orderRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    if (process.env.NODE_ENV == "production") process.stdout.write(clc.reset);
    console.log(
      clc.black.bgGreenBright(
        `Server running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode.`
      )
    );
    connectDB();
  });
