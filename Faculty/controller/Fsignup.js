const Faculty_signup = require("../models/faculty.js");
const ejs = require("ejs");

async function handlerFacultypageSignUp(req, res) {
  return res.render("F_Sign_up");
}



const handlerFacultyDataFromSignUp = async (req, res) => {
  const {
    first_Name,
    last_Name,
    password,
    faculty_id,
    faculty_position,
    email,
  } = req.body;
  const ip = req.ip;

  await Faculty_signup.create({
    first_Name,
    last_Name,
    password,
    faculty_id,
    faculty_position,
    email,
    IpAddress: ip,
  });
  return res.status(200).json({ msg: "OK" });
};

module.exports = {
  handlerFacultyDataFromSignUp,
  handlerFacultypageSignUp,
};
