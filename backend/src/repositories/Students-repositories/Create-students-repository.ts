import {  
  ICreateStudentsModel,
  ICreateStudentsModelData,
  INameClassModelData
} from "../../models/StudentsModels/ICreateStudentsModel";

import { Database } from "../../data/database/Database";

export class CreateStudentsRepository
extends Database implements ICreateStudentsModel {
  #TABLE_ClASS_NAME = "Class";
  #TABLE_STUDENTS_NAME = "Students";

  public async create ( 
    data: ICreateStudentsModelData,
    { nameClass }: INameClassModelData
    ) {
    const [ foundClass ] = await Database
    .connectionDatabase(this.#TABLE_ClASS_NAME)
    .where("name_class", nameClass);

    await Database.connectionDatabase(this.#TABLE_STUDENTS_NAME)
    .insert({
      id_student: data.idStudent,
      first_name: data.firstName,
      last_name: data.lastName,
      participation: data.participation,
      id_student_ref: foundClass?.id_class,
    });
  };

  public async findClass ({ nameClass }: INameClassModelData) {
    const [ foundClass ] = await Database
    .connectionDatabase(this.#TABLE_ClASS_NAME)
    .where("name_class", nameClass);

    return foundClass;
  };
};