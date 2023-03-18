const express = require("express");
const app = express();
app.use(express.json());

const { sequelize } = require("./config/config");
const { orderRouter } = require("./routes/orderRoutes");
const { userRouter } = require("./routes/userRouter");

app.get("/",(req,res)=>{
  res.send("Page opened successfully");
})
app.use("/users", userRouter);
app.use("/orders", orderRouter);

app.listen(8080, async () => {
  try {
    await sequelize.sync();
    console.log("Connected to DB");
  } catch (e) {
    console.log(e);
  }
});
