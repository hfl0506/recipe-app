import * as express from 'express';
import UserRoutes from './user.route';
import AuthRoutes from './auth.route';

const router = express.Router();

router.use('/user', UserRoutes);
router.use(AuthRoutes);

export default router;
