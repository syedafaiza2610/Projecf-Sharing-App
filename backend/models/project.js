const mongoose =  require("mongoose")
const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    username: String,
    url: String,
    image: String
})
const Project = new mongoose.model("Project", Schema)
module.exports = Project