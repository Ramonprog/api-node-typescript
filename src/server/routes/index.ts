import { Router } from 'express';
import { CitiesControllers } from '../controllers/index';

const router = Router();

router.get('/', (_, res) => {
  res.json('Olá, dev');
});

router.post('/cidades', CitiesControllers.Create);

export { router };
