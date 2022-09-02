import { 
  IDeleteClassModel,
  IDeleteClassModelData,
 } from "../../models/ClassModels/IDeleteClassModel";

 import { Database } from "../../data/database/Database";

 export class DeleteClassRepository
 extends Database implements IDeleteClassModel {
  #TABLE_ClASS_NAME = "Class";
  #TABLE_STUDENTS_NAME = "Students";
  
  public async delete ({ nameClass }: IDeleteClassModelData) {
    const studentsOfThisClass = await Database
    .connectionDatabase(this.#TABLE_ClASS_NAME)
    .select("id_student", "first_name", "last_name", "participation")
    .innerJoin(`${this.#TABLE_STUDENTS_NAME}`,
    `Class.id_class`,
    `Students.id_student_ref`
    ).where("name_class", nameClass);

    studentsOfThisClass.forEach(async (student) => {
      await Database.connectionDatabase(this.#TABLE_STUDENTS_NAME)
      .delete().where("id_student", student.id_student);
    });

    await Database.connectionDatabase(this.#TABLE_ClASS_NAME)
    .delete().where("name_class", nameClass);
  };

  public async findClass ({ nameClass }: IDeleteClassModelData) {
    const [ foundClass ] = 
    await Database.connectionDatabase(this.#TABLE_ClASS_NAME)
    .where("name_class", nameClass);

    return !!foundClass;
  };
 };