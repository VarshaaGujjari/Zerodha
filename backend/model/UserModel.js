// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },

//     password: {
//         type: String,
//         required: true,
//     },
// });

// const UserModel = mongoose.model("users", UserSchema);

// module.exports = { UserModel };

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: [true, "Password is required"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const UserModel = mongoose.model("User", UserSchema);

// module.exports = { UserModel };

const mongoose = require("mongoose");

const { UserSchema } = require("../schemas/UserSchema");

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };