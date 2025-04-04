import express from 'express';
const router = express.Router();
import {getCards, getCard, postCard, putCard, deleteCard} from '../controllers/card.controller.js';

router.get('/', getCards);

router.get('/:id', getCard);

router.post('/', postCard);

router.put('/:id', putCard);

router.delete('/:id', deleteCard);

export default router;