import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        required: true,
    },
    worksInHospitals: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Hostpital",
    } // i want kie doctors kis hospital mai dair rehtai hai no. of Hours bhi
    //  dena chata tu toh iskai liye humai ek naya Schema define karna paraiga kie konsa hospital mai kitni dair rehtai hai 



}, {timestamps: true})

export const Doctors = mongoose.model("Doctors", doctorSchema)