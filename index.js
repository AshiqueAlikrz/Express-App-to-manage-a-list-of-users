const express = require("express");
const app = express();

const userRoute = require("./routes/user");

app.use(express.json());
app.use("/user", userRoute);

PORT = 4001;

app.listen(PORT, (req, res) => {
  console.log(`running server at ${PORT}`);
});


  