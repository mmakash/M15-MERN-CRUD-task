const express = require("express");
const router = express.Router();
const StudentsController = require("../controller/StudentsController");


router.post("/create-student", StudentsController.createStudents);
router.get("/read-all", StudentsController.readAllStudents);
router.post("/update-student/:id", StudentsController.updateStudent);
router.get("/delete-student/:id", StudentsController.deleteStudent);


module.exports = router;

