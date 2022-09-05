import { Request, Response } from "express";

import { 
  FindStudentRepository
 } from "../../repositories/Students-repositories/Find-student-repository";

 import {
   FindStudentCase
 } from "../../useCases/StudentsCases/FindStudentCase";

 export class FindStudentController {
  async find (req: Request, res: Response) {
    const { idStudent } = req.params;

    const findStudentRepository =
    new FindStudentRepository();

    const findStudentCase = 
    new FindStudentCase(findStudentRepository);

    const result = await findStudentCase.find(idStudent);

    return res.status(200).json(result);
  };
 };