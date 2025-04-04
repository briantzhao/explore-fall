import express from 'express';
import { connect } from 'mongoose';
import cardRoutes from './routes/card.route.js';
import searchRoutes from './routes/search.route.js';
import cors from 'cors';
const app = express();

// middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// routes
app.use("/api/cards", cardRoutes);
app.use("/api/search", searchRoutes);

connect("mongodb+srv://bzhao1991:Zib3OAkMR2RiYl10@explorefalldb.xjeemcw.mongodb.net/?retryWrites=true&w=majority&appName=ExploreFallDB")
.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed.")
});