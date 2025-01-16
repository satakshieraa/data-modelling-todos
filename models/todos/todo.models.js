import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default:false,
  },
  createBY:{ // iska relation hona chaheyai humre user model kai sath mai toh hum kya karaigai , 2 chizo ka dhyan rakhna hai 1st kie apka ek special type hai yeh, dusra refrence kie user ka refrence dai rhai ho ya sub_todo ka refrence dai rhai ho
    type: mongoose.Schema.Types.ObjectId, //( yeh likhtai he isko pata chalta hai kie ap isko kisi na kisi ka refrence dainai walia ho ya toh user ka ya toh sub_todo ka ya kisi aur model ka , kai bad compulsory hai next line mai likhna )
    ref: "User" // yeh wala feild kisnai banaya yeh mujhe pata hai ab 1 aur feild mai yaha pai dena chata hu jiska nam hai sub_todo jo arryas kai andar rahaigai
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sub_Todo"
    }
  ] // Array of subTodos
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema)