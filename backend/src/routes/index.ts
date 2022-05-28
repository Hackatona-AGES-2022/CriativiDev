import { Router } from 'express';
import categoryRouter from './category.router';
import healthRouter from './health.router'

const router = Router();
router.use(healthRouter);
router.use('/api/v1/categories', categoryRouter);

export default router;
