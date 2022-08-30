import { 
  IGetAllsClassModel,
  IClassModelData,
 } from "../../models/ClassModels/IGetAllsClassModel";

 import { Database } from "../../data/database/Database";

export class GetAllClassRepository
extends Database implements IGetAllsClassModel {
  #TABLE_NAME = "Class";

  public async getAll () {
    const allClass = Database
    .connectionDatabase(this.#TABLE_NAME).select();

    return allClass;
  };
};