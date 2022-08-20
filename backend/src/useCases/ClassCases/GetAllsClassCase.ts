import { IGetAllsClassModel } from "../../models/IGetAllsClassModel";

import { VerifyIfNotClassList } from "../../errors/ClassErrors";

export class GetAllsClassCase {
  constructor (
    private getAllsClassModel: IGetAllsClassModel
  ){};

  public async getAllsClass () {
    const allClass = await this.getAllsClassModel.getAll();

    if ( allClass.length <= 0 ) throw new VerifyIfNotClassList();

    return allClass;
  }
};