import { CustomError } from "./CustomError";

export class VerifyIfContainRequestValues 
extends CustomError {
  constructor () {
    super (
      "check if the name of the class or the name of the person responsible is not missing!.", 
       406
      );
  };
};

export class VerifyIfExistClass extends CustomError {
  constructor (public nameClass: string) {
    super(
      `There is already a class with that name ( ${nameClass} )!.`, 
       409
      );
  };
};