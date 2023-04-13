import { Request, Response } from "express";

import LoginDto from "./dtos/login.dto";
import loginService from "./login.service";

export const loginApi = async (req: Request, res: Response) => {
  const body: LoginDto = req.body;

  await loginService(body, res);
};
