import { Request, Response } from "express";

import { 
  GetAllClassRepository
 } from "../../repositories/Class-repositories/Get-alls-class-repository";

 import { 
  GetAllsClassCase
 } from "../../useCases/ClassCases/GetAllsClassCase";

 export class GetAllsClassController {
  public async getAlls (req: Request, res: Response) {
    const getAllClassRepository =
    new GetAllClassRepository();

    const getAllsClassCase = 
    new GetAllsClassCase(getAllClassRepository);

    const all =  await getAllsClassCase.getAllsClass();

    return res.status(200).json(all);
  };
 };