const Faculty_signup = require("../models/faculty.js");
// const crypto = require('crypto');
function handlerFacultypageLogin(req, res) {
  return res.render("F_Login.ejs");
}

const handlerFacultyDataFromLogin = async (req, res) => {

  try {
    const { email, password ,faculty } = await req.body;
    console.log( typeof faculty);
    const user = await Faculty_signup.findOne({  faculty_id:faculty  });
  
    console.log(user)
    if(!user) {
        return res.status(401).json(
            {message: 'User not find'}
        )
    }

    if(user.email === email && user.password === password && user.faculty_id == faculty) {
        return res.status(200).json({message: 'Login Successfully'})
    }

    return res.status(400).json({message : 'Not found'})

} catch (error) {
    return res.status(500).json(error)
}
};

module.exports = {
  handlerFacultyDataFromLogin,
  handlerFacultypageLogin,
};
