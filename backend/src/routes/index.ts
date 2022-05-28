import { Router } from 'express';
import healthRouter from './health.router';
import userRouter from './user.route';

const router = Router();
router.use(healthRouter);

router.use('/users', userRouter);

export default router;
