import { 
  ICreateStudentsModel
 } from "../../models/StudentsModels/ICreateStudentsModel";

 import { 
  ICreateStudentsRequest,
  INameClassRequest 
} from "./StudentsCasesTypes"; 

 import { 
  ValidateEmptyPropertiesOutput,
  validateEmptyProperties
 } from "../../utils/validateEmptyProperties";

 import { generateId } from "../../utils/generateId";

 import { 
  VerifyIfContainRequestValues,
  VerifyIfNotExistClass,
  CheckThatClassDoesNotExceedLimit,
  CheckIfParticipationIsValid,
  EmptyFieldError,
 } from "../../errors/StudentsErrors";

 export class CreateStudentsCase {
  constructor (
    private readonly createStudentsModel: ICreateStudentsModel
  ){};

  public async createStudent ( 
          request: ICreateStudentsRequest,
        { nameClass }: INameClassRequest
    ) {

    const foundClass = 
    await this.createStudentsModel.findClass({nameClass});

    let { 
      lastName,
      firstName,
      participation
    } = request;

    const validationResult: ValidateEmptyPropertiesOutput = 
    validateEmptyProperties(request);

    if ( !foundClass ) throw new VerifyIfNotExistClass(nameClass);

    if ( !validationResult.isValid ) {
      throw new VerifyIfContainRequestValues();
    };

    if ( firstName.trim().length < 2) {
      throw new EmptyFieldError();
    };

    if ( lastName.trim().length < 2 ) {
      throw new EmptyFieldError();
    };
    
    if ( !participation ) request.participation = 1;

    if ( participation < 0 || participation > 100 ) {
      throw new CheckIfParticipationIsValid();
    };

    if ( foundClass.studentsList?.length >= 7 ) {
      throw new CheckThatClassDoesNotExceedLimit();
    };

    const idStudent = generateId();

    const data = {
      idStudent,
      lastName,
      firstName,
      participation
    };

    await this.createStudentsModel.create(data, {nameClass});

    return 201;
  };
 };