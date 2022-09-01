import { 
  IEditStudentsModel,
  IEditStudentsModelData,
  IStudentIdAndClassName,
  IOutputFindClassAndStudent
} from "../../models/StudentsModels/IEditStudentsModel";

import { Database } from "../../data/database/Database";

export class EditStudentsRepository
extends Database implements IEditStudentsModel {
  #TABLE_ClASS_NAME = "Class";
  #TABLE_STUDENTS_NAME = "Students";

  public async edit (
     data: IEditStudentsModelData,
     callbackFalse: any,
     callback?: IStudentIdAndClassName) {

      await Database.
      connectionDatabase(this.#TABLE_STUDENTS_NAME)
      .update({
        first_name: data.firstName,
        last_name: data.lastName,
        participation: data.participation,
      }).where("id_student", callback?.idStudent);
  };

  public async findClassAndStudent ({ nameClass, idStudent }
    : IStudentIdAndClassName) {
        const [ classFound ] = await Database
        .connectionDatabase(this.#TABLE_ClASS_NAME)
        .where("name_class", nameClass);

        const [ studentFound ] = await Database
        .connectionDatabase(this.#TABLE_STUDENTS_NAME)
        .where("id_student", idStudent);

        return {
          classFound,
          studentFound
        };
    };
};