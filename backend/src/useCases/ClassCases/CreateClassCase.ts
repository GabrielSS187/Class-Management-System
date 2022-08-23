import { ICreateClassModel } from "../../models/ClassModels/ICreateClassModel";

import { 
  VerifyIfContainRequestValues,
  VerifyIfExistClass,
} from "../../errors/ClassErrors";

import { generateId } from "../../utils/generateId";

import { ICreateClassCaseRequest } from "./ClassCasesTypes";

import { 
  validateEmptyProperties,
  ValidateEmptyPropertiesOutput
 } from "../../utils/validateEmptyProperties";

 export class CreateClassCase {
  constructor (
    private readonly createClassModal: ICreateClassModel
  ){};

  public async createClass ( request: ICreateClassCaseRequest ) {
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

    const idClass = generateId();

    const data = {
      idClass,
      nameClass,
      responsible
    };
    
    await this.createClassModal.create(data);
  };
 };