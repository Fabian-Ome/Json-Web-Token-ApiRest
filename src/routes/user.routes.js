import { Router } from 'express'
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { autJwt, verifySingup } from "../middlewares";

router.post('/', [
    autJwt.verifyToken,
    autJwt.isAdmin,
    verifySingup.checkRolesExisted
], userCtrl.createUser)

export default router;