import { 
  ICreateClassModel,
  ICreateClassModelData 
} from "../../models/ClassModels/ICreateClassModel";

import { Database } from "../../data/database/Database";

export class CreateClassRepository
extends Database implements ICreateClassModel {
  #TABLE_NAME = "Class";

  async create ( data: ICreateClassModelData ) {
   await Database.connectionDatabase(this.#TABLE_NAME)
   .insert({
    id_class: data.idClass,
    name_class: data.nameClass,
    responsible: data.responsible,
   });
  }; 

  async findClass ( nameClass: string ) {
    const [ foundClass ] = await Database
    .connectionDatabase(this.#TABLE_NAME)
    .where("name_class", nameClass);

    return !!foundClass;
  };
};