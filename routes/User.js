import express from "express";
import {
  addProject,
  addTimeline,
  addYoutube,
  contact,
  deleteProject,
  deleteTimeline,
  deleteYoutube,
  getUser,
  login,
  logout,
  updateUser,
} from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const userRouter = express.Router();
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated);
userRouter.route("/admin/update").put(isAuthenticated, updateUser);
userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRouter.route("/admin/timeline/:id").post(isAuthenticated, deleteTimeline);
userRouter.route("/admin/project/:id").post(isAuthenticated, deleteProject);
userRouter.route("/admin/project/add").post(isAuthenticated, addProject);
userRouter.route("/admin/youtube/add").post(isAuthenticated, addYoutube);
userRouter.route("/admin/youtube/:id").post(isAuthenticated, deleteYoutube);
userRouter.route("/contact").get(contact);
