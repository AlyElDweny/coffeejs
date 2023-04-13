import { Request, Response } from "express";
import logoutService from "./logout.service";

export const logout = async (req: Request, res: Response) => {
  await logoutService(req, res);
};
