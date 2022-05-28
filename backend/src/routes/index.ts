import { Router } from 'express';
import healthRouter from './health.router';
import userRouter from './user.router';
import categoryRouter from './category.router';
import donationRouter from './donation.router';
import solicitacaoRouter from './solicitacao.router';

const router = Router();
router.use(healthRouter);
router.use('/api/v1/categories', categoryRouter);
router.use('/api/v1/users', userRouter);
router.use('/api/v1/donations', donationRouter);
router.use('/api/v1/solicitacoes', solicitacaoRouter)

export default router;
