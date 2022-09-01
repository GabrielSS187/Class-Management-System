import { Request, Response } from "express";

import { 
  CreateStudentsRepository
 } from "../../repositories/Students-repositories/Create-students-repository";

 import { 
  CreateStudentsCase
 } from "../../useCases/StudentsCases/CreateStudentsCase";

 export class CreateStudentsController {
  public async create (req: Request, res: Response) {
    const { nameClass } = req.params;

    const { 
      firstName,
      lastName,
      participation
     } = req.body;

     const createStudentsRepository =
     new CreateStudentsRepository();

     const createStudentsCase =
     new CreateStudentsCase(createStudentsRepository);

     await createStudentsCase.createStudent({
      firstName,
      lastName,
      participation
     }, {nameClass});

     res.status(201)
     .json({message: `Estudante: ${firstName} ${lastName}, criado com sucesso.`});
  };
 };