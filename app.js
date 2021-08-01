const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("dotenv").config();
const expressValidator = require('express-validator');

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//app
const app = express();

// database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));


//middleware
app.use(cors()); // app  will be able to handle request coming from different origins
                // backend and frontend client will have different origins
                
app.use(morgan('dev')); //helpful for APIs during development
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors()); // app  will be able to handle request coming from different origins
                // backend and frontend client will have different origins


// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
