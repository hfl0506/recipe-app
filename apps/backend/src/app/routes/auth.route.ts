import * as express from 'express';
import {
  userGetMeHandler,
  userLoginHanlder,
  userLogoutHandler,
  userRefreshHandler,
} from '../controllers/auth.controller';
import userAuth from '../middlewares/user-auth.middleware';
import validateResource from '../middlewares/validate.middleware';
import { userLoginSchema } from '../schema/auth.schema';

const router = express.Router();

router.post('/login', validateResource(userLoginSchema), userLoginHanlder);

router.post('/refresh', userRefreshHandler);

router.post('/logout', userAuth, userLogoutHandler);

router.post('/me', userAuth, userGetMeHandler);

export default router;
