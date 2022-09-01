import { Router } from "express";

import { 
  CreateStudentsController
 } from "../controllers/StudentsControllers/CreateStudentsController";
 import { 
  EditStudentsController
 } from "../controllers/StudentsControllers/EditStudentsController";
 import { 
  DeleteStudentsController
 } from "../controllers/StudentsControllers/DeleteStudentsController";

export const studentsRoutes = Router();

const createStudentsController = new CreateStudentsController();
const editStudentsController = new EditStudentsController();
const deleteStudentsController = new DeleteStudentsController();

studentsRoutes.post("/:nameClass", createStudentsController.create);
studentsRoutes.put("/:nameClass/:idStudent", editStudentsController.edit);
studentsRoutes.delete("/:nameClass/:idStudent", deleteStudentsController.delete);

