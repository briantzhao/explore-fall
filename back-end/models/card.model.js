import mongoose from 'mongoose';
const CardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true]
        },
        colors: {
            type: Array,
            required: [true]
        },
        set: {
            type: String,
            required: [true]
        },
        supertypes: {
            type: Array,
            required: [true]
        },
        subtypes: {
            type: Array,
            required: [true]
        },
        manaCost: {
            type: String,
            required: [true]
        },
        manaValue: {
            type: String,
            required: [true]
        },
        power: {
            type: Number,
            required: [false]
        },
        toughness: {
            type: Number,
            required: [false]
        },
        rulesText: {
            type: String,
            required: [true]
        },
        archetype: {
            type: Array,
            required: [false]
        }

}
);

const Card = mongoose.model("Card", CardSchema);
export default Card;