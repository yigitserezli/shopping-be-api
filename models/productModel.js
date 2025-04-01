import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        purchasePrice: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.0,
        },
        sellingPrice: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.0,
        },
        imageUrl: {
            type: DataTypes.STRING,
            defaultValue: "",
        },
        sku: {
            type: DataTypes.STRING,
            defaultValue: "",
        },
    },
    {
        tableName: "products",
        timestamps: true,
    }
);

export default Product;
