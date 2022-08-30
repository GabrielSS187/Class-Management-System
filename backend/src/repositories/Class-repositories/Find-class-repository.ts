import { 
  IFindClassModel,
  IFindClassModelData,
 } from "../../models/ClassModels/IFindClassModel";

import { Database } from "../../data/database/Database";

 export class FindClassRepository 
 extends Database implements IFindClassModel {
  #TABLE_ClASS_NAME = "Class";
  #TABLE_STUDENTS_NAME = "Students";

  public async find ({ nameClass }: IFindClassModelData) {
    const [ foundClass ] = 
    await Database.connectionDatabase(this.#TABLE_ClASS_NAME)
    .where("name_class", nameClass);

    if ( !foundClass ) return false;
    
    const studentsOfThisClass = await Database
    .connectionDatabase(this.#TABLE_ClASS_NAME)
    .select("id_student", "first_name", "last_name", "participation")
    .innerJoin(`${this.#TABLE_STUDENTS_NAME}`,
    `Class.id_class`,
    `Students.id_student_ref`
    ).where("name_class", nameClass);

    const classAndStudent = {
      nameClass: nameClass,
      responsible: foundClass.responsible,
      studentsList: studentsOfThisClass,
    };

    return classAndStudent;
  };
 };