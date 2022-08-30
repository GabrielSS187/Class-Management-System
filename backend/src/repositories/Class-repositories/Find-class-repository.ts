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
    const foundClass = await Database
    .connectionDatabase(this.#TABLE_ClASS_NAME)
    .innerJoin(`${this.#TABLE_STUDENTS_NAME}`,
      ``
    )
  };
 };