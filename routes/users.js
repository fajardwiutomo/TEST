import express from "express"
import { login } from "../controllers/usersController/login.js"
import { register} from "../controllers/usersController/register.js"
const router = express.Router()

router.post("/register", register)
router.post("/login", login)

export default router