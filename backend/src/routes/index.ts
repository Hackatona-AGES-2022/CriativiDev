import { Router } from 'express';
import healthRouter from './health.router';
import userRouter from './user.router';
import categoryRouter from './category.router';
import donationRouter from './donation.router';

const router = Router();
router.use(healthRouter);
router.use('/api/v1/categories', categoryRouter);
router.use('/api/v1/users', userRouter);
router.use('/api/v1/donations', donationRouter);

export default router;
