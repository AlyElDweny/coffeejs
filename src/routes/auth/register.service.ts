import { Response } from "express";
import { validate } from "class-validator";

import RegisterDto from "./dtos/register.dto";
import { User } from "../../entities/User.entity";
import { dbConn } from "../../data-source";

export default async (registerDto: RegisterDto, res: Response) => {
  const { username, email, password } = registerDto;

  try {
    // TODO: validate data
    let errors: any = {};
    const emailUser = await dbConn.manager.findOneBy(User, { email });
    const usernameUser = await dbConn.manager.findOneBy(User, { username });

    if (emailUser) errors.email = "Email is already taken";
    if (usernameUser) errors.username = "Username is already taken";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    // TODO: CREATE NEW USER
    const user = new User({ username, email, password });

    errors = await validate(user);
    if (errors.length > 0) return res.status(400).json({ errors });

    await user.save();

    // return user
    return res.json({ data: { user } });
  } catch (err) {
    console.log({ err });
    return res.status(500).json(err);
  }
};
