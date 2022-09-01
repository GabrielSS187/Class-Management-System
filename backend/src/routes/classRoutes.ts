import express from "express"

import { 
  CreateClassControllers
 } from "../controllers/ClassControllers/CreateClassController";
 import {
  GetAllsClassController
 } from "../controllers/ClassControllers/GetAllsClassController";
 import { 
  FindClassController
 } from "../controllers/ClassControllers/FindClassController";
 import { 
  DeleteClassController
 } from "../controllers/ClassControllers/DeleteClassController";

 export const classRoutes = express.Router();

 const createClass = new CreateClassControllers();
 const findClass = new FindClassController();
 const getAllClass = new GetAllsClassController();
 const deleteClass = new DeleteClassController();

 classRoutes.get("/all", getAllClass.getAlls);
 classRoutes.get("/:nameClass", findClass.find);
 classRoutes.post("/create", createClass.create);
 classRoutes.delete("/:nameClass", deleteClass.delete);