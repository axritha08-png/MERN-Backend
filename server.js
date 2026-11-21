const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("connected to mongodb");
})
.catch((err) => {
    console.log("mongodb not connected",err)
})

const userRouter = require("./Routers/UserRouters");
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


