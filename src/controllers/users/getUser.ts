import { Request, Response } from 'express';
import { users } from '../../db';

export const getUser = (req: Request, res: Response) => {
  try {
    const user = users.find((banan) => banan.id === parseInt(req.params.id));
    if (!user) res.status(404).send('User not found');
    res.status(200).send(user);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};
