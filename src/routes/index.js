import { Router } from 'express';
import joi from 'joi';


const router = Router();

// sample route
router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to population API.' }));

export default router;
