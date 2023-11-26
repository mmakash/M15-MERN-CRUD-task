const StudentsModel = require('../models/StudentsModel');


// create students
exports.createStudents = async (req, res) => {
    let Body = req.body;
    try {
        let result = await StudentsModel.create(Body);
        res.status(200).json({status:"success",data:result});
    }
    catch (err) {
        res.status(400).json({status:"fail",data:err});
    }
}
// Read all students
exports.readAllStudents = async (req, res) => {
    try {
        let result = await StudentsModel.find();
        res.status(200).json({status:"success",data:result});
    }
    catch (err) {
        res.status(400).json({status:"fail",data:err});
    }
}
// update student
exports.updateStudent = async (req, res) => {
    let Body = req.body;
    let id = req.params.id;
    try {
        let result = await StudentsModel.updateOne({ _id: id }, Body);
        res.status(200).json({status:"success",data:result});
    }
    catch (err) {
        res.status(400).json({status:"fail",data:err});
    }
}
// delete student
exports.deleteStudent = async (req, res) => {
    let id = req.params.id;
    try {
        let result = await StudentsModel.deleteOne({ _id: id });
        res.status(200).json({status:"success",data:result});
    }
    catch (err) {
        res.status(400).json({status:"fail",data:err});
    }
}
exports.getStudentsById = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let result = await StudentsModel.find(query);
        res.status(200).json({status:"success",data:result});
    }
    catch (err) {
        res.status(400).json({status:"fail",data:err});
    }
}

