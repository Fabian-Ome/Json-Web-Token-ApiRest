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
    const findedPro = await product.findById(req.params.productId)
    res.status(200).json(findedPro);
}

export const updateProductById = async (req, res) => {
    const updatedProduct = await product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updatedProduct);
}

export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
    const deletedProduct = await product.findByIdAndDelete(productId);
    res.status(200).json(deletedProduct);

}