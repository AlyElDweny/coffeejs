import { isEmpty } from "class-validator";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import cookie from "cookie";

import LoginDto from "./dtos/login.dto";
import { dbConn } from "../../data-source";
import { User } from "../../entities/User.entity";

export default async (body: LoginDto, res) => {
  const { username, password } = body;

  try {
    let errors: any = {};

    if (isEmpty(username)) errors.username = "Username must not be empty";
    if (isEmpty(password)) errors.password = "Password must not be empty";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const user = await dbConn.manager.findOneBy(User, { username });

    if (!user) return res.status(404).json({ error: "User not found" });

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ password: "Password is incorrect" });
    }

    const token = Jwt.sign({ id: user.id, username }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 36000, // in milliseconds
      path: "/",
    });
    return res.json({ data: { user } });
  } catch (err) {}
};
