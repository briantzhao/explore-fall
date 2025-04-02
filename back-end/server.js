import express from 'express';
import { connect } from 'mongoose';
import cardRoutes from './routes/card.route.js';
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/cards", cardRoutes);

connect("mongodb+srv://bzhao1991:Zib3OAkMR2RiYl10@explorefalldb.xjeemcw.mongodb.net/?retryWrites=true&w=majority&appName=ExploreFallDB")
.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed.")
});