// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const { UserModel } = require("../models/userModel");
// const authRoute = express.Router();

// authRoute.get("/", async (req, res) => {
//   const data = await UserModel.find();
//   res.send(data);
// });
// authRoute.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   const userPresent = await UserModel.findOne({ email: email });
//   // console.log(req.body);
//   if (userPresent?.email) {
//     res.send({ msg: "User already exists" });
//   } else {
//     try {
//       bcrypt.hash(password, 5, async (err, secure_password) => {
//         if (err) {
//           console.log(err);
//         } else {
//           const user = new UserModel({
//             email,
//             password: secure_password,
//             name,
//           });
//           await user.save();
//           res.send({ msg: "Registered SucessFully" });
//         }
//       });
//     } catch (e) {
//       res.send({ msg: "Error in registering the user" });
//       console.log(e);
//     }
//   }
// });

// authRoute.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.find({ email });
//     if (user.length > 0) {
//       bcrypt.compare(password, user[0].password, (err, result) => {
//         if (result) {
//           const token = jwt.sign({ userID: user[0]._id }, "project");
//           // console.log(token);
//           res.send({ msg: "Logged in SuccessFull", token: token });
//         } else {
//           res.send({ msg: "Wrong Credentials" });
//         }
//       });
//     } else {
//       res.send({ msg: "Wrong Credentials" });
//     }
//   } catch (e) {
//     res.send({ msg: "Logged In Failed" });
//     console.log(e);
//   }
// });
// module.exports = {
//   authRoute,
// };


const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userModel");
const authRoute = express.Router();

authRoute.get("/", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});

// authRoute.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   const userPresent = await UserModel.findOne({ email: email });
//   // console.log(req.body);
//   if (userPresent?.email) {
//     res.send({ msg: "User already exists" });
//   } else {
//     try {
//       bcrypt.hash(password, 5, async (err, secure_password) => {
//         if (err) {
//           console.log(err);
//         } else {
//           const user = new UserModel({
//             email,
//             password: secure_password,
//             name,
//           });
//           await user.save();
//           res.send({ msg: "Registered SucessFully" });
//         }
//       });
//     } catch (e) {
//       res.send({ msg: "Error in registering the user" });
//       console.log(e);
//     }
//   }
// });
// Delete user by ID
authRoute.delete("delete/:id", async (req, res) => {
  try {
    const result = await UserModel.findByIdAndDelete(req.params.id);
    if (result) {
      res.send({ msg: "User deleted successfully" });
    } else {
      res.send({ msg: "User not found" });
    }
  } catch (e) {
    res.send({ msg: "Error deleting user" });
    // console.log(e);
  }
});

// Update user by ID
authRoute.patch("update/:id", async (req, res) => {
  try {
    const result = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (result) {
      res.send({ msg: "User updated successfully", user: result });
    } else {
      res.send({ msg: "User not found" });
    }
  } catch (e) {
    res.send({ msg: "Error updating user" });
    // console.log(e);
  }
});

// authRoute.post("/login", async (req, res) => {
//   const { email, password } = req.body;

authRoute.post("/register", (req, res) => {
  const { email, name, password } = req.body

  try {
    const user = UserModel.find({ email })
    // console.log(user)
    if (user.length >= 1) {
      res.status(400).send({ "msg": "User already exist, please login" })
    }
    else {
      bcrypt.hash(password, 4, async (err, hash) => {
        const user = new UserModel({ email, name, password: hash });
        await user.save()
        res.status(200).send({ "msg": "new user added" })
      });

    }
  } catch (error) {
    res.status(400).send({ "msg": error.message })
  }

})

//login route for user 
authRoute.post("/login",async (req, res) => {
  const { email, password } = req.body

  try {
      const user =await UserModel.findOne({ email })
      // console.log(user)
      if (user) {
          bcrypt.compare(password, user.password, async (err, result) => {
              // result == true
              // Store hash in your password DB.
              if (result) {
                  res.status(200).send({ "msg": "login success", "token": jwt.sign({ "userid": user._id }, "fashionflare"),firstname:user.name,email:user.email })

              } else {
                  res.status(400).send({ "msg": "wrong details" })
              }

          });

      } 


  } catch (error) {
      res.status(400).send({ "msg": error.message })
  }

});



// })

module.exports = {
  authRoute,
};
