const express = require("express");
const { getAllProjects, createProject, deleteProject, updateProject } = require("../controllers/project");
const router = express.Router();
// CRUD
router
  .get("/", getAllProjects )
  .post("/add", createProject)
  .delete("/:id", deleteProject)
  .post("/:id", updateProject);
module.exports = router;
