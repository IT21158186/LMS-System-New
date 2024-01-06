import express from 'express'
import { DoPayment, getBankBalance, getPaymetnHistory } from '../controllers/FeesController.js';

const FeesRouter = express.Router();

FeesRouter.get('/', getPaymetnHistory);
FeesRouter.get('/balance', getBankBalance);
FeesRouter.post('/', DoPayment);

export default FeesRouter;