// const mongoose = require("mongoose");

// // When first user was created in database through registering a new user in routes/auth.js, the database created a collection called users and listed first user (MongoDb)

// const UserSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//     img: { type: String },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

// When first user was created in database through registering a new user in routes/auth.js, the database created a collection called users and listed first user (MongoDb)

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
