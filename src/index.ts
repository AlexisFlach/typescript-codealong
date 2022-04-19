import express from 'express';
import userRoutes from './routes/users/userRoutes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userRoutes);

// app.post('/', (req: any, res: any) => {
//   const { id, name } = req.body;
//   const obj = new User(id, name);
//   users.push(obj);
//   res.status(201).send('Item created');
// });

const PORT = 4001;
app.listen(4001, () => {
  console.log(`Server listens on port: ${PORT}`);
});
