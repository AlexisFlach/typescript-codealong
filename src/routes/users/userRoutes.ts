import { Router } from 'express';
import { getAllUsers } from '../../controllers/users/getAllUsers';

const router = Router();

router.get('/', getAllUsers);

export = router;
