import { Request, Response } from "express";

import RegisterDto from "./dtos/register.dto";
import registerService from "./register.service";

export const registerApi = async (req: Request, res: Response) => {
  const body: RegisterDto = req.body;

  // TODO: module.api should deal with auth within a normal api

  await registerService(body, res);
};
