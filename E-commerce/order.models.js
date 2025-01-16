import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId:{        // humani yaha pai product ka id liya hai kyukie purai tarah sai product store karnai ka bhi jarurt nhi hai kyukie product Id sai mai refrence kar lunga
      type: mongoose.Schema.Type.ObjectId,
      ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
    },
}) 
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
     Customer: {
            type: mongoose.Schema.Type.ObjectId,
            ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING" , "CANCELLED" , "DELIVERED"],  //enum means chocies kie apko kya kya options dai rha hu
        default: "PENDING", // ab kya hoga kie jab bhi order create hoga na toh ap isi enum mai sai choose kar sktai ho and if spelling is wrong then will not go at all 
    }
    
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)

// kisnai kitna order mangwaya woh toh humare pass hai he nhi
// kyukie product mai toh hum stock rakh rhai hai
// toh aisai cases mai chota sa schema aur bana laitai hai
// yeh wala schema kahi jayaiga bhi nhi aur kahi export bhi nhi hoga
// but humai order ka structure define karnai mai help karaiga, iss trah sai mini models bhi banaye jatai hai

// jitna bhi ap schema banatai ho na sab ka har ek individual product ka unique Id generate hota hai
// mongo DB apnai aap generate karta hai

// ab kya hai jab order hojayaiga toh order kai andar kuch stage hogi
// kie order process ho rha hai , accept kar liya ship ho rha toh yeh kafi interesting chiz hai
// but we would not want to keep them in the string 
// because here we will not like to give that type of controle to the user where someone is writing deliver spelling something
// or any wrong spells or any wrong data like thses
// so here we will have to make a restrictive feild that order ka status yahi ho sakta hai kie is particular chiz kie 
// spelling yahi hai and apko bhi isi tarikai sai likhna hai 