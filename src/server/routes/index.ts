import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.post('/', (req, res) => {
  const resultado = req.body;
  return res.status(StatusCodes.ACCEPTED).json(resultado);
});

export { router };
