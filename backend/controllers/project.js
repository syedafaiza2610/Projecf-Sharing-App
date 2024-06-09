const Project = require("../models/project");

const getAllProjects = (req, res) => {
  res.send("get all project");
};

const createProject = async (req, res) => {
  const { title, desc, image, username, url }= req.body
  const result = await Project.create({ title, desc, image, username, url })
  console.log("result", result)
  res.send(result);
};

const updateProject = (req, res) => {
  res.send("updateProject");
};
const deleteProject = (req, res) => {
  res.send("deleteProject");
};

module.exports = {
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,
};
