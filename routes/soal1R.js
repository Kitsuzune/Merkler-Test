import express from 'express';
const router = express.Router();
import { soal1 } from '../controllers/soal1.js';

router.get('/soal1', (req, res) => {
  const pattern = soal1();
  res.send(pattern);
});

export default router;
