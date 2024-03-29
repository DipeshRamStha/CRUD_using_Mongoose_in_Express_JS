import StudentModel from "../models/Student.js";
class StudentController {
  static createDoc = (req, res) => {
    console.log("Create Doc Post Method");
    console.log(req.body);
    res.redirect("/student");
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result);
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
    res.render("index");
  };
  static editDoc = (req, res) => {
    res.render("edit");
  };

  static updateDocById = (req, res) => {
    res.redirect("/student");
  };

  static deleteDocById = (req, res) => {
    res.redirect("/student");
  };
}

export default StudentController;
