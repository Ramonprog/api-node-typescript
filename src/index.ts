import { server } from './server/server';
import 'dotenv/config';

server.listen(process.env.PORT || 3333, () =>
  console.log('App rodando na porta 3333')
);
