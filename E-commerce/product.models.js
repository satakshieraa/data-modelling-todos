import mongoose from "mongoose"
import { Category } from "./category.models"

const productschema = new mongoose.Schema({
    description: {
        required: true,
        type: String ,
    },
    name: {
        required: true,
        type: String ,
    },
    productImage:{
        type: String //URL of images
    },
    price: {
        type: Number,
        default:0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    },

}, {timestamp: true})

export const Product = mongoose.model("Product", productschema)