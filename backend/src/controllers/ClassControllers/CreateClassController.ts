import { Request, Response } from "express";

import { 
  CreateClassRepository
 } from "../../repositories/Class-repositories/Create-class-repository";

 import { 
  CreateClassCase
 } from "../../useCases/ClassCases/CreateClassCase";

 export class CreateClassControllers {
  public async create ( req: Request, res: Response ) {
    const { 
      nameClass,
      responsible
     } = req.body;

     const createClassRepository = 
     new CreateClassRepository();

     const createClassCase = 
     new CreateClassCase(createClassRepository);

     await createClassCase.createClass({
      nameClass,
      responsible
     });

     return res.status(201)
     .json({message: `Classe: ${nameClass}, criada com sucesso.`});
  };
 };