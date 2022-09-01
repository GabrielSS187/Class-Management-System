import { Request, Response } from "express";

import { 
  EditStudentsRepository
 } from "../../repositories/Students-repositories/Edit-students-repository";

 import { 
  EditStudentsCase
 } from "../../useCases/StudentsCases/EditStudentsCase";

 export class EditStudentsController {
  public async edit (req: Request, res: Response) {
    const { idStudent } = req.params;
    const { nameClass } = req.params;
    const classAndStudent = { idStudent, nameClass };

    const {
      firstName,
      lastName,
      participation
    } = req.body;

    const editStudentsRepository =
    new EditStudentsRepository();

    const editStudentsCase =
    new EditStudentsCase(editStudentsRepository);

    await editStudentsCase.editStudent({
      firstName,
      lastName,
      participation
    }, classAndStudent);

    return res.status(200)
    .json({message: "Informações editadas com sucesso."});
  };
 };