import { ICreateClassModel } from "../../models/ICreateClassModel";

import { 
  VerifyIfContainRequestValues,
  VerifyIfExistClass,
} from "../../errors/ClassErrors";

import { ICreateClassCaseRequest } from "./ClassCasesTypes";

import { 
  validateEmptyProperties,
  ValidateEmptyPropertiesOutput
 } from "../../utils/validateEmptyProperties";

 export class CreateClassCase {
  constructor (
    private readonly createClassModal: ICreateClassModel
  ){};

  async createClass ( request: ICreateClassCaseRequest ) {
    const { nameClass, responsible } = request;

    const someClassFound = 
    await this.createClassModal.findClass(nameClass);

    const validationResult: ValidateEmptyPropertiesOutput = 
    validateEmptyProperties(request);

    //* Errors ==============================================
    if ( !validationResult.isValid ) {
      throw new VerifyIfContainRequestValues();
    };

    if ( someClassFound ) {
      throw new VerifyIfExistClass(nameClass);
    };
    //* ======================================================
    
    await this.createClassModal.create({
      nameClass,
      responsible
    });
  };
 };