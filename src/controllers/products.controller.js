import product from "../models/product";

export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body;

    const newProduct = new product({ name, category, price, imgURL });

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
}

export const getProducts = async (req, res) => {
    const products = await product.find()
    res.json(products);
}

export const getProductById = async (req, res) => {
    const produc = await product.findById(req.params.productId)
    res.status(200).json(produc);

}

export const updateProductById = (req, res) => {

}

export const deleteProductById = (req, res) => {

}