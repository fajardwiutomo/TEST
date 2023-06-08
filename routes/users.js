import express from "express"
import { login } from "../controllers/users/login.js"
import { register} from "../controllers/users/register.js"
const router = express.Router()

router.post("/register", register)
router.post("/login", login)

export default router