import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = Router();

// Ruta de registro
router.post('/register', register);

// Ruta de login
router.post('/login', login);

export default router;