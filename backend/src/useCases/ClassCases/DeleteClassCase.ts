import { IDeleteClassModel } from "../../models/ClassModels/IDeleteClassModel";

import { INameClassRequest } from "./ClassCasesTypes";

import { VerifyIfNotClass } from "../../errors/ClassErrors";

export class DeleteClassCase {
  constructor (
    private readonly deleteClassModel: IDeleteClassModel
  ){};

  public async deleteClass ({ nameClass }: INameClassRequest) {
    const foundClass = await
    this.deleteClassModel.findClass({nameClass});
    console.log(foundClass)

    if ( !foundClass ) throw new VerifyIfNotClass();

    await this.deleteClassModel.delete({nameClass});

    return 200;
  };
};