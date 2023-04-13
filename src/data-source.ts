import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User.entity";

export const dbConn = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "password1234",
  database: "coffeejsDB",
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});
