import { Request, Response } from "express";

import { 
  FindClassRepository
 } from "../../repositories/Class-repositories/Find-class-repository";

 import { 
  FindClassCase
 } from "../../useCases/ClassCases/FindClassCase";

 export class FindClassController {
  public async find ( req: Request, res: Response) {
    const { nameClass } = req.params;

    const findClassRepository = 
    new FindClassRepository();

    const findClassCase =
    new FindClassCase(findClassRepository);

    const classFound = 
    await findClassCase.findClass({nameClass})

    return res.status(200).json(classFound);
  };
 };