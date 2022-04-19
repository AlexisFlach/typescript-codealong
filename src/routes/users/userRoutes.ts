import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
} from '../../controllers/';

const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export = router;
