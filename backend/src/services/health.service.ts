import { Request, Response } from 'express';
import { checkDatabaseStatus, checkMigrationVersion } from '../repositories/health.repository';

export default async function healthCheck(_: Request, res: Response): Promise<void> {
  const status = await checkDatabaseStatus();
  const migrationVersion = await checkMigrationVersion();
  res.json({
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    database: { status, migrationVersion },
  });
}
