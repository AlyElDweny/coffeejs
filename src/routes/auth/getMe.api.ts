import { Request, Response } from "express";
import getMeService from "./getMe.service";

export const getMe = async (req: Request, res: Response) => {
  await getMeService(req, res);
};
