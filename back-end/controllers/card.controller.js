import Card from '../models/card.model.js';
const getCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        res.status(200).json(cards);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

const getCard = async(req, res) => {
    try {
            const {id} = req.params;
            const card = await Card.findById(id);
            res.status(200).json(card);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
}

const postCard = async(req,res) => {
    try {
        const card = await Card.create(req.body);
        res.status(200).json(card);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

const putCard = async(req,res) => {
    try {
            const {id} = req.params;
            const card = await Card.findByIdAndUpdate(id, req.body);
            if (!card) {
                return res.status(404).json({message: "Card not found"});
            }
            const updatedCard = await Card.findById(id);
            res.status(200).json(updatedCard);
    
        } catch(error) {
            res.status(500).json({message: error.message});
        }
}

const deleteCard = async(req,res) => {
    try {
        const {id} = req.params;

        const card = await Card.findByIdAndDelete(id);
        
        if (!card) {
            return res.status(404).json({message: "Card not found"});
        }
        res.status(200).json({message: "Card deleted successfully"});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

export {
    getCards,
    getCard,
    postCard,
    putCard,
    deleteCard,
};