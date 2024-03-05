const { fileLoader } = require("ejs");
const Faculty_signup = require("../models/faculty.js");
const { MongoClient } = require("mongodb");
const uri1 = "mongodb://localhost:27017/StudentPannel";
const client1 = new MongoClient(uri1);
client1.connect();
// Get the source and destination databases
const db1 = client1.db();
// Specify the source and destination collections
const student_infos = db1.collection("student_infos");

const handleGetProfile = async (req, res) => {
  const faculty_id = req.query.faculty_id;

  // Connect to both databases
  const faculty = await Faculty_signup.findOne({ faculty_id });

  // Query the documents from the source collection
  const student = await student_infos.find({}).toArray();
  return res.render("profile", { faculty, student });
};
const handlepostProfile = (req, res) => {
  return res.render("profile");
};

const handleGetCards = async (req, res) => {
  const faculty_id = req.query.faculty_id;
  console.log(faculty_id);

  const faculty = await Faculty_signup.findOne({ faculty_id });
  // Query the documents from the source collection
  const student = await student_infos.find({}).toArray();
  res.render("cards", { faculty, student });
};
const handlepostCards = (req, res) => {
  return res.render("cards");
};

const handleGetProgressbar = async (req, res) => {
  const faculty_id = req.query.faculty_id;

  const faculty = await Faculty_signup.findOne({ faculty_id });

  const student = await student_infos.find({}).toArray();
  return res.render("progressbar", { faculty, student });
};
const handlepostProgressbar = (req, res) => {
  return res.render("progressbar");
};

const handleGetJsGridTable = async (req, res) => {
  const faculty_id = req.query.faculty_id;

  const faculty = await Faculty_signup.findOne({ faculty_id });

  // Query the documents from the source collection
  const student = await student_infos.find({}).toArray();
  return res.render("grid_table", { faculty, student });
};
const handlepostJsGridTable = (req, res) => {
  return res.render("grid_table");
};

const handleGetFormWizard = async (req, res) => {
  const faculty_id = req.query.faculty_id;

  const faculty = await Faculty_signup.findOne({ faculty_id });

  // Query the documents from the source collection
  const student = await student_infos.find({}).toArray();

  return res.render("form_wizard", { faculty, student });
};
const handlepostFormWizard = (req, res) => {
  return res.render("form_wizard");
};

const handleGetCkeditorDocument = async (req, res) => {
  const faculty_id = req.query.faculty_id;

  const faculty = await Faculty_signup.findOne({ faculty_id });

  // Query the documents from the source collection
  const student = await student_infos.find({}).toArray();
  return res.render("text_editor", { faculty, student });
};
const handlepostCkeditorDocument = (req, res) => {
  return res.render("text_editor");
};
const handleGetModal = async (req, res) => {
  try {
    const faculty_id = req.body.faculty_id;
    console.log("hii drashti");
    console.log(faculty_id);
    // const faculty = await Faculty_signup.findOne({ faculty_id });
    const enrollment = req.params.id;
    console.log(typeof enrollment);
    const enrollment_No = parseInt(enrollment);
    console.log(typeof enrollment_No);
    console.log(enrollment_No);

    const student = await student_infos.findOne({ enrollment_No });
    if (!student) {
      return res.status(404).send("Student not found");
    }

    res.render("Modal", { student });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const handleGetModal_dashBoard = async (req, res) => {
  try {
    const faculty_id = req.body.faculty_id;
    console.log("hii drashti");
    console.log(faculty_id);
    // const faculty = await Faculty_signup.findOne({ faculty_id });
    const enrollment = req.params.id;
    console.log(typeof enrollment);
    const enrollment_No = parseInt(enrollment);
    console.log(typeof enrollment_No);
    console.log(enrollment_No);

    const data = await student_infos.findOne({ enrollment_No });
    if (!data) {
      return res.status(404).send("Student not found");
    }

    res.render("Modal_dashBoard", { data });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};


module.exports = {
  handleGetProfile,
  handleGetCards,
  handleGetProgressbar,
  handleGetJsGridTable,
  handleGetFormWizard,
  handleGetCkeditorDocument,
  handlepostProfile,
  handlepostCards,
  handlepostProgressbar,
  handlepostJsGridTable,
  handlepostFormWizard,
  handlepostCkeditorDocument,
  handleGetModal,
  handleGetModal_dashBoard,
};
