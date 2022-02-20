import * as express from 'express';
import {
  createUserHanlder,
  forgotPasswordHandler,
  resetPasswordHandler,
  verifyUserHandler,
} from '../controllers/user.controller';
import validateResource from '../middlewares/validate.middleware';
import {
  createUserSchema,
  forgetUserSchema,
  resetPasswordSchema,
  verifyUserSchema,
} from '../schema/user.schema';

const router = express.Router();

router.post('/register', validateResource(createUserSchema), createUserHanlder);

router.post(
  '/verify/:id/:verifyCode',
  validateResource(verifyUserSchema),
  verifyUserHandler
);

router.post(
  '/forgetpassword',
  validateResource(forgetUserSchema),
  forgotPasswordHandler
);

router.post(
  '/resetpassword/:id/:passwordResetCode',
  validateResource(resetPasswordSchema),
  resetPasswordHandler
);

export default router;
