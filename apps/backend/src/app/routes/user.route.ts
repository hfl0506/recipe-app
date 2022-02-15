import * as express from 'express';
import { createUserHanlder } from '../controllers/user.controller';
import validateResource from '../middlewares/validate.middleware';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.post('/register', validateResource(createUserSchema), createUserHanlder);

router.patch('/:id', (req, res) => {
  res.status(201).send('updated' + req.params.id);
});

router.delete('/:id', (req, res) => {
  res.status(201).send('delete' + req.params.id);
});

export default router;
