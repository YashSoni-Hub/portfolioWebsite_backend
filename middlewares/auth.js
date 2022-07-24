import { User } from "../modal/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    console.log("req.cookies", token);
    if (!token) {
      res.status(501).json({
        status: false,
        message: "Login to access this resource",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    console.log("user", user);
    req.user = user;
    next();
  } catch (error) {
    return res.status(501).json({
      status: false,
      message: "Something went wrong1111",
    });
  }
};
