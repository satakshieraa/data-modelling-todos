import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    dignosedWith: {
        type: String,
        required: true,
    },
    
    address: {
        type: String,
        required: true,
    },
    
    age: {
        type: String,
        required: true,
    },
    bloodgroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["M" ,"F" ,"O"],
        required: true,
    },
    admittedIN: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Hospital'
    },
}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)