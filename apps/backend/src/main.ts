import * as express from 'express';
import * as colors from 'colors';
import * as cors from 'cors';
import connectDB from './app/database/db';
import router from './app/routes';
import corsOptions from './app/config/cors.config';

colors.enable();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.send('health check');
});

app.use('/api', router);

const port = process.env.PORT || 3333;
app.listen(port, async () => {
  await connectDB();
  console.log(`Listening at http://localhost:${port}/api`);
});
