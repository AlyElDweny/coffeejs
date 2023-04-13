import { Router } from "express";
import { registerApi } from "./register.api";
import { loginApi } from "./login.api";
import { getMe } from "./getMe.api";
import { logout } from "./logout.api";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/register", registerApi);
router.post("/login", loginApi);
router.get("/me", auth, getMe);
router.get("/logout", auth, logout);

export default router;
