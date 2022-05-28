import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import router from '../routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const envFound = dotenv.config();
if (!envFound || envFound.error) {
    console.log('Could not load environment variables')
}

export default app;
