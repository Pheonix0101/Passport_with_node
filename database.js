const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/passport")
    .then((res) => {
      console.log(`Connected to MongoDB: ${res.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

exports.User= mongoose.model("User",userSchema);