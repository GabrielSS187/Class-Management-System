import { IDeleteClassModel } from "../../models/IDeleteClassModel";

import { INameClassRequest } from "./ClassCasesTypes";

import { VerifyIfNotClass } from "../../errors/ClassErrors";

export class DeleteClassCase {
  constructor (
    private deleteClassModel: IDeleteClassModel
  ){};

  public async deleteClass ({ nameClass }: INameClassRequest) {
    const foundClass = await
    this.deleteClassModel.findClass({nameClass});

    if (  !foundClass ) throw new VerifyIfNotClass();

    await this.deleteClassModel.delete({nameClass});
  };
};