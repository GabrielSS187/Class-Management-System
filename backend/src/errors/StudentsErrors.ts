import { CustomError } from "./CustomError";

//* ==================================================================
//* CreateClassCase
export class VerifyIfContainRequestValues 
extends CustomError {
  constructor () {
    super (
      "Check that none of this information is missing: last name, first name, participation!.", 
       406
      );
  };
};

export class VerifyIfNotExistClass extends CustomError {
  constructor (public nameClass: string) {
    super(
      `No class with that name was found: ( ${nameClass} )!.`, 
       404
      );
  };
};
//* =============================================================