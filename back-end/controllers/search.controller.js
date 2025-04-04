import Card from '../models/card.model.js';
const searchCards = async (req, res) => {
    try {
        const {query} = req.query || "";
        const cards = await Card.find({
            name: {$regex: String(query), $options: "i"}
        }).sort({name: 1});
        res.status(200).json(cards);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

export {
    searchCards
};