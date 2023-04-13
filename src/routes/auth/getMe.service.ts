import jwt from "jsonwebtoken";

import { dbConn } from "../../data-source";
import { User } from "../../entities/User.entity";

export default async (req, res) => {
  //   try {
  //     const { token } = req.cookies;
  //     if (!token) throw new Error("unauthenticated");

  //     const { username }: any = jwt.verify(token, process.env.JWT_SECRET);
  //     if (!username) throw new Error("unauthenticated");

  //     const user = await dbConn.manager.findOneBy(User, { username });
  //     if (!user) throw new Error("unauthenticated");

  //     return res.json({ data: { user } });
  //   } catch (error) {
  //     return res.status(401).json({ error });
  //   }
  console.log("getme", res.locals);
  return res.locals.user;
};
