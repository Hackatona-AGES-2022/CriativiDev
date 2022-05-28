import { Router } from 'express';
import healthRouter from './health.router';
import userRouter from './user.router';
import categoryRouter from './category.router';
import donationRouter from './donation.router';
import solicitacaoRouter from './solicitacao.router';
import authRouter from './auth.router';
import matchesRouter from './donation-solicitation.router';

const router = Router();
router.use(healthRouter);
router.use('/api/v1/auth', authRouter);
router.use('/api/v1/categories', categoryRouter);
router.use('/api/v1/users', userRouter);
router.use('/api/v1/donations', donationRouter);
router.use('/api/v1/solicitations', solicitacaoRouter);
router.use('/api/v1/matches', matchesRouter);

export default router;
