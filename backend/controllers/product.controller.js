import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    console.log("User Request Data");
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({success: false, message: "Server Error"})
    }

}


export const createProducts = async (req, res) => {
    console.log("User Creates Data");
    const product = req.body; // use will send this data.

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const deleteProducts = async (req, res) => {
    console.log("User Deleted Data");
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Product ID"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"})
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const updateProducts = async (req, res) => {
    console.log("User Updated Data");
    const {id } = req.params;
    const product = req.body;

    console.log(product)

    if(!mongoose.Types.ObjectId.isValid(id))  {
        return res.status(404).json({success: false, message: "Invalid Product ID"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({success: true, data: updatedProduct});
    }
    catch (err) {
        res.status(500).json({success: true, message: "Server error"})
    }
}
