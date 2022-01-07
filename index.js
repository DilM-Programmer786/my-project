var express = require("express");
var mongoose = require("mongoose");
const User = require("./model/users");

var cors = require("cors");

const app = express();

//middleware

app.use(cors());
app.use(express.json());

// Routes

//create user http://localhost:4000
app.post("/", async (req, res) => {
  const new_user = req.body;
  console.log(new_user);
  const user = new User(new_user);
  await user.save();
  res.send({ user: user });
});

//get user
app.get("/", async (req, res) => {
  const user = await User.find();
  res.send({ user: user });
});
//get single  user
app.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send({ user: user });
});
//delete  user
app.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.send("user deleted successfully");
});

// update user
app.put("/:id", async (req, res) => {
  const update_user = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, update_user);

  res.send({ message: "user update successfully", user: user });
});

// Conect to db

mongoose.connect("mongodb+srv://admin-dil:admin123@cluster0.t2lik.mongodb.net/mydill", (err, db) => {
  if (!err) {
    console.log("Connection build");
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
