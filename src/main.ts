import dotenv from "dotenv";

import app from "./server.express";
import { dbConn as conn } from "./data-source";

dotenv.config();
//
app.listen(4000, async () => {
  console.log("server is running at http://localhost:4000");

  try {
    await conn.initialize();
    console.log("database is connected check pgAdmin at http://localhost:5433");
  } catch (err) {
    console.log({ err });
  }
});
