const Faculty_signup = require("../models/faculty.js");
// Import necessary modules
const { MongoClient } = require("mongodb");

// Connection URIs for source and destination databases
const uri1 = "mongodb://localhost:27017/StudentPannel";

// Create MongoClient instances for each URI
const client1 = new MongoClient(uri1);

async function handleIndex(req, res) {
  try {
    const { faculty_id } = req.query;

    console.log("Faculty ID:", faculty_id);

    // Find the faculty by ID
    const faculty = await Faculty_signup.findOne({ faculty_id });

    if (!faculty) {
      console.log("Faculty not found");
      return res.status(404).send("Faculty not found!");
    }
    // Connect to both databases
    await client1.connect();

    console.log("Connected to both databases");

    // Get the source and destination databases
    const db1 = client1.db();

    // Specify the source and destination collections
    const student_infos = db1.collection("student_infos");

    // Query the documents from the source collection
    const student = await student_infos.find({}).toArray();

    console.log("Collection copied successfully");

    // Render the index.ejs template with the found faculty and students
    res.render("index", { faculty, student });
  } catch (error) {
    console.error("Error copying collection:", error);
    console.error("Error handling index:", error);
    return res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  handleIndex,
};
