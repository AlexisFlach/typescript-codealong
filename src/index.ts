import express, { Request, Response } from 'express';
import { User } from './models/User';
import { users } from './db';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
});

const PORT = 4001;
app.listen(4001, () => {
  console.log(`Server listens on port: ${PORT}`);
});
