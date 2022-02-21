import * as express from 'express';
import { userLoginHanlder } from '../controllers/auth.controller';
import validateResource from '../middlewares/validate.middleware';
import { userLoginSchema } from '../schema/auth.schema';

const router = express.Router();

router.post('/login', validateResource(userLoginSchema), userLoginHanlder);

router.post('/refresh');

export default router;
