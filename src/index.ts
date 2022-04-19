import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello my world');
});

const PORT = 4001;
app.listen(4001, () => {
  console.log(`Server listens on port: ${PORT}`);
});
