import { Request, Response, NextFunction } from "express";

import 'express-async-errors'; // https://www.npmjs.com/package/express-async-errors

import { app } from "./server";

app.use("/", (req: Request, res:Response) => {
  try {
    return res.status(200).send("Oi Gabriel!");
  } catch (error) {
    console.log(error)
  }
})

// import { CustomError } from "./errors/CustomError";

//* =========================================================
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   return error instanceof CustomError 
//   ?
//   res.status(error.statusCode).send(error.message)
//   :
//   res.status(500).send(error.message || error.sqlMessage)
// });