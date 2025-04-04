import express from 'express';
const router = express.Router();
import {searchCards} from '../controllers/search.controller.js';

router.get('/', searchCards);

export default router;