import db from '../config/database';

export async function checkDatabaseStatus(): Promise<string> {
  return db
    .raw('select 1+1 as result')
    .then(() => 'CONNECTED')
    .catch(() => 'DISCONNECTED');
}

export async function checkMigrationVersion() {
  return db.migrate.currentVersion();
}
