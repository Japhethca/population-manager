import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import router from './routes';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger('tiny'));

server.use('/api/v1', router);
server.all('*', (req, res) => res.status(404)
  .json({ message: 'The endpoint you are trying to access does not exist' }));

const port = process.env.PORT || 3400;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default server;
