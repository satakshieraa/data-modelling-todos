import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },

}, {timestamps: true});

export const User = mongoose.model("User" , userSchema)

/* ab kae log kya karaigai kie bagh kai sidha product bananai
chalai jayaigai but fir product likhtai time we will think that 
every product belongs to a category -- so first think about the feilds
which are unique in themselves and are not dependent on themselves
toh wo toh honai he chaheyai

uskai bad konsai feild hai jo 1 pai dependent hai and konsai feild hai
jo 2 pai dependent hai aisai karke humai sochna hota hai */