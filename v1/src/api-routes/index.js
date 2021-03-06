const express = require("express");
const Projects = require("./Projects");
const Users = require("./Users");
const Sections = require("./Sections");
const Tasks = require("./Tasks");
const Comment = require("./Comment");

const router = express.Router();

router.use("/projects",Projects);
router.use("/users",Users);
router.use("/section",Sections);
router.use("/tasks",Tasks);
router.use("/comment",Comment);

module.exports = router