import { 
  IDeleteStudentsModel,
  IDeleteStudentsDataModel
 } from "../../models/StudentsModels/IDeleteStudentsModel";

 import { Database } from "../../data/database/Database";

 export class DeleteStudentsRepository
 extends Database implements IDeleteStudentsModel {
  #TABLE_ClASS_NAME = "Class";
  #TABLE_STUDENTS_NAME = "Students";

  public async delete ({
    nameClass,
    idStudent
  }: IDeleteStudentsDataModel) {
   await Database.connectionDatabase(this.#TABLE_STUDENTS_NAME)
   .delete().where("id_student", idStudent);
  };

  public async searchClassAndStudent ({
    nameClass,
    idStudent
  }: IDeleteStudentsDataModel) {
    const [ foundClass ] = await Database
    .connectionDatabase(this.#TABLE_ClASS_NAME)
    .where("name_class", nameClass);

    const [ foundStudent ] = await Database
    .connectionDatabase(this.#TABLE_STUDENTS_NAME)
    .where("id_student", idStudent);
    
    return {
      foundClass: !!foundClass,
      foundStudent: !!foundStudent,
    };
  };
 };