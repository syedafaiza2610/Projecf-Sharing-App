const Project = require("../models/project");

const getAllProjects = async (req, res) => {
  const getProject = await Project.find()
  res.send(getProject)
  // res.send("get all project");
};

const createProject = async (req, res) => {
  const { title, desc, image, username, url } = req.body
  const result = await Project.create({ title, desc, image, username, url })
  console.log("result", result)
  res.send(result);
};

const updateProject = (req, res) => {
  res.send("updateProject");
};
const deleteProject = async (req, res) => {
  const {_id} = req.body
    await Project
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted sucessfully"))
    .catch((err) => console.log(err))
//   try {
//     const { id } = req.params;
//     await deleteData(id)
//     res.status(200).send({ status: 200, message: DELETE_DATA_MESSAGE });
//   } catch (err) {
//     res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
//   }
// }
// res.send("deleteProject");
};
// const deleteProject = async (id) => {
//   return await deleteById(id);
// }

module.exports = {
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,
};
