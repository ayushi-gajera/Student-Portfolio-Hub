const express = require("express");
const router = express.Router();
const {
  handlerFacultyDataFromSignUp,
  handlerFacultypageSignUp,
} = require("../controller/Fsignup");
const { handleIndex } = require("../controller/Findex");
const {
  handlerFacultyDataFromLogin,
  handlerFacultypageLogin,
} = require("../controller/Flogin");
const {
  handleGetProfile,
  handleGetModal_dashBoard,
  handleGetCards,
  handleGetModal,
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
} = require("../admin_menu/menu");

router.get("/", handlerFacultypageSignUp);
router.get("/index", handleIndex);
router.post("/", handlerFacultyDataFromSignUp);
router.get("/faculty_login", handlerFacultypageLogin);
router.post("/faculty_login", handlerFacultyDataFromLogin);

router.get("/profile", handleGetProfile);
router.get("/profile", handlepostProfile);

router.get("/cards", handleGetCards);
router.post("/cards", handlepostCards);

router.get("/progressbar", handleGetProgressbar);
router.post("/progressbar", handlepostProgressbar);

router.get("/grid_table", handleGetJsGridTable);
router.post("/grid_table", handlepostJsGridTable);

router.get("/form_wizard", handleGetFormWizard);
router.post("/form_wizard", handlepostFormWizard);

router.get("/text_editor", handleGetCkeditorDocument);
router.post("/text_editor", handlepostCkeditorDocument);

router.get("/modal/:id",handleGetModal);
router.get("/modal_dashboard/:id",handleGetModal_dashBoard);


// router.get("/F_Form", handleF_Form);
// router.post("/F_Form", handleF_FormInsertData);

module.exports = router;
