import { Request, Response } from "express";

import { 
  DeleteClassRepository
 } from "../../repositories/Class-repositories/Delete-class-repository";

 import { 
  DeleteClassCase
 } from "../../useCases/ClassCases/DeleteClassCase";

 export class DeleteClassController {
  public async delete ( req: Request, res: Response) {
    const { nameClass } = req.params;

    const deleteClassRepository =
    new DeleteClassRepository();

    const deleteClassCase = 
    new DeleteClassCase(deleteClassRepository);

    await deleteClassCase.deleteClass({nameClass});

    return res.status(200)
    .json({message: `Classe: ${nameClass}, deletada com sucesso.`});
  };
 };