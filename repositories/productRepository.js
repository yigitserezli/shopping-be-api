import Product from "../models/productModel.js";

export const getAll = async (req, res) => {
    return await Product.findAll();
};

export const getById = async (id) => {
    return await Product.findByPk(id);
};

export const create = async (productData) => {
    return await Product.create(productData);
};

export const update = async (id, productData) => {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return await product.update(productData);
};

export const remove = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.destroy();
    return product;
};
