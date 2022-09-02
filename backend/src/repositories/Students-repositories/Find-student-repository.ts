import {
   IFindStudentModel
 } from "../../models/StudentsModels/IFindStudentModel";

 import { Database } from "../../data/database/Database";

 export class FindStudentRepository 
 extends Database implements IFindStudentModel {
  #TABLE_NAME = "Students";
  
  async find (idStudent: string) {
    const [ foundStudent ] = await 
    Database.connectionDatabase(this.#TABLE_NAME)
    .where("id_student", idStudent);

    return foundStudent;
  };
 };