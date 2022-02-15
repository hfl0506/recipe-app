import * as express from 'express';
import UserRoutes from './user.route';

const router = express.Router();

router.use('/user', UserRoutes);

export default router;
