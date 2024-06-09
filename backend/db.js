const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose.connect("mongodb+srv://syedafaiza2610:faizanaqi123@clustor1.jukqksg.mongodb.net/")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))
}
module.exports = dbconnect