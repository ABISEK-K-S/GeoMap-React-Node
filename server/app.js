const express = require("express");
const app = express();
const userRouter = require("./router/user_router");
const companyRouter = require("./router/company_router");

app.use("/user", userRouter);
app.use("/company", companyRouter);

// Server Listening
app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
