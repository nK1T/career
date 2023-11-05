const mongoose = require("mongoose");
const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://talentfiner:talentfiner2002@cluster0.5piw5rs.mongodb.net/candidates?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database connected <3"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDB;
