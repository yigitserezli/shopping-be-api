import express from "express";
import productRoutes from "./routes/productRoutes.js";
import sequelize from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES
app.use("/api/products", productRoutes);

sequelize
    .sync()
    .then(() => {
        console.log("Database connected successfully (SQLite)");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });
