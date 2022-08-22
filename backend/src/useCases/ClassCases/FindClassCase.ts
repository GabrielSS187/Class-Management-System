import { IFindClassModel } from "../../models/ClassModels/IFindClassModel";

import { INameClassRequest } from "./ClassCasesTypes";

import { VerifyIfNotClass } from "../../errors/ClassErrors";

export class  FindClassCase {
  constructor (
    private readonly findClassModel: IFindClassModel
  ){}

 public async findClass ({ nameClass }: INameClassRequest) {
    const foundClass = 
    await this.findClassModel.find({nameClass});

    if ( !foundClass ) throw new VerifyIfNotClass();

    return foundClass;
  };
};