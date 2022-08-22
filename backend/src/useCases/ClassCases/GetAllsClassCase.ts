import { IGetAllsClassModel } from "../../models/ClassModels/IGetAllsClassModel";

import { VerifyIfNotClassList } from "../../errors/ClassErrors";

export class GetAllsClassCase {
  constructor (
    private readonly getAllsClassModel: IGetAllsClassModel
  ){};

  public async getAllsClass () {
    const allClass = await this.getAllsClassModel.getAll();

    if ( allClass.length <= 0 ) throw new VerifyIfNotClassList();

    return allClass;
  }
};