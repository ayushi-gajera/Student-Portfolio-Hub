const Faculty_signup = require("../models/faculty");

async function IpReqRes(req, res, next) {
  await Faculty_signup.create({
    IpAddress: req.ip,
  });
  next();
}
module.exports = {
  IpReqRes,
};
