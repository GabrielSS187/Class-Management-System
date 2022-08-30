import { 
  IDeleteClassModel,
  IDeleteClassModelData,
 } from "../../models/ClassModels/IDeleteClassModel";

 import { Database } from "../../data/database/Database";

 export class DeleteClassRepository
 extends Database implements IDeleteClassModel {
  #TABLE_NAME = "Class";
  
  public async delete ({ nameClass }: IDeleteClassModelData) {
    await Database.connectionDatabase(this.#TABLE_NAME)
    .delete().where("name_class", nameClass);
  };

  public async findClass ({ nameClass }: IDeleteClassModelData) {
    const [ foundClass ] = 
    await Database.connectionDatabase(this.#TABLE_NAME)
    .where("name_class", nameClass);

    return !!foundClass;
  };
 };