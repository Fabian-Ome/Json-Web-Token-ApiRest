import { Router } from 'express'
const router = Router();
import * as authCtrl from "../controllers/auth.controller";
import { verifySingup } from "../middlewares";

router.post('/singup', [verifySingup.checkDuplicateUsernameOrEmail, verifySingup.checkRolesExisted], authCtrl.singUp);

router.post('/singin', authCtrl.singIn);

export default router;