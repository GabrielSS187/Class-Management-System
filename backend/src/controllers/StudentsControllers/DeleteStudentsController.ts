import { Request, Response } from "express";

import { 
  DeleteStudentsRepository
 } from "../../repositories/Students-repositories/Delete-students-repository";

 import { 
  DeleteStudentsCase
 } from "../../useCases/StudentsCases/DeleteStudentsCase";

 export class DeleteStudentsController {
  public async delete (req: Request, res: Response) {
    const { nameClass } = req.params;
    const { idStudent } = req.params;

    const deleteStudentsRepository =
    new DeleteStudentsRepository();

    const deleteStudentsCase = 
    new DeleteStudentsCase(deleteStudentsRepository);

    await deleteStudentsCase.deleteStudent({nameClass, idStudent});

    return res.status(200)
    .json({message: "Estudante deletado com sucesso."});
  };
 };