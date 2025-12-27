// Entry point for API
import express from 'express'
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import path from "path";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); //allows us to parse json data
app.use("/api/products", productRoute);

console.log("Current Environment: ", JSON.stringify(process.env.NODE_ENV));

if(process.env.NODE_ENV === "production") {
    console.log("Deploying Frontend...")
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));

    })
    console.log("Successfully Deployed frontend page");
}

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
    console.log("Connecting Database");
    connectDB();
})
