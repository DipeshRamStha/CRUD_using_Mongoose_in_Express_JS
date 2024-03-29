import StudentModel from "../models/Student.js";
class StudentController {
  // Create Document
  static createDoc = async (req, res) => {
    // console.log(req.body.name);
    try {
      const { name, age, fees } = req.body;
      const doc = new StudentModel({
        name: name,
        age: age,
        fees: fees,
      });
      // Saving Document
      const result = await doc.save();
      // console.log(result);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  // Show all document
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

  // Show Edit Form with Data
  static editDoc = async (req, res) => {
    console.log(req.params.id);
    res.render("edit");
  };

  // Update Document
  static updateDocById = (req, res) => {
    res.redirect("/student");
  };

  // Delete Document
  static deleteDocById = (req, res) => {
    res.redirect("/student");
  };
}

export default StudentController;
