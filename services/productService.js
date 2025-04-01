import { getAll, getById, create, update, remove } from "../repositories/productRepository.js";

export const getAllProducts = async () => {
    return await getAll();
};

export const getProductById = async (id) => {
    return await getById(id);
};

export const createProduct = async (productData) => {
    return await create(productData);
};

export const updateProduct = async (id, productData) => {
    return await update(id, productData);
};

export const deleteProduct = async (id) => {
    return await remove(id);
};
