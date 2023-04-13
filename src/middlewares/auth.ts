import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { dbConn } from "../data-source";
import { User } from "../entities/User.entity";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("unauthenticated");

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET);
    if (!username) throw new Error("unauthenticated");

    const user = await dbConn.manager.findOneBy(User, { username });
    if (!user) throw new Error("unauthenticated");

    res.locals.user = user;
    console.log("auth", res.locals);
    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};
