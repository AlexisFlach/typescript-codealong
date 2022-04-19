import express, { Request, Response } from 'express';
import { User } from './models/User';
import { users } from './db';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(users);
});

app.post('/', (req: Request, res: Response) => {
  const { id, name } = req.body;
  const obj = new User(id, name);
  users.push(obj);
  res.status(201).send('Item created');
});

const PORT = 4001;
app.listen(4001, () => {
  console.log(`Server listens on port: ${PORT}`);
});
