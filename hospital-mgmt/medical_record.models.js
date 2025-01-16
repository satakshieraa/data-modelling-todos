import mongoose from "mongoose"

const medicalSchema = new mongoose.Schema({})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalSchema)