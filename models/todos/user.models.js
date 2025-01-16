
import { Timestamp } from 'bson';
import mongoose from 'mongoose';

//mongoose help in making schema ,schema is a method which takes an object ({})

const userSchema = new mongoose.schema(
  {
    // we are writing our data feilds here
    //username: String,
    //email: String, we can write our data feilds like this also but more profesionally we can write it like this
    //username: {} // by defining an object here {} we are calling the superpower of mongoose as we can define a lot of things here
    // yeh jo object hai na {} iski properties padhna he mongoose kie documentation padhna hai
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
      // now see key here like type unique accepts arrays also for custom msgs
      // jaisia
      // required: [true ,"password is required"]
    }, // yeh sab toh hogaya user ka but jab i want that when an user is registering i want to store other things also that woh user kab aya usnai kya store karwaya kab modify hua yeh sari chizai and these all things are so common that mongo DB gives us a lot of ways to store these things
    // ismai mai ek tarika hai kie aap apnai time span ko kaisia hold kar sktai hai jaisai createdAt and updatedAt
  },
  { timestamps: true } // toh pehla jo object hai wo define karta hai kie kya kya data ap logai and dusra jo frild hai timestamps wala define karta hai kie kya kya timestamps ap lai rhai ho
);
// most imp is to export this schema and schema banaya kaha pai mongo db kai andar but we are data modelling here so we will not connect db here

// yaha const kai bad likj saktai hai userschema,todoschema, hospitalschema yeh sab banaye gai

// now we will export
export const User = mongoose.model('User', userSchema);

// model ek method hai jo 2 parameter laita  hai
// 1st kya model banao
// 2nd kiske basis pai banao

// we will write these 3 three lines of code exactly the same always

//wo User ya uskai jagah kuch bhi likha ho jab DB mai nam jata hai na toh yeh hojayiga users
// yeh kyu last mai s lag gaya kyukie yeh mongo db ka standarised practise hai working hai inner kie ap is trah ka model dogai toh model convert ho jata hai plural mai aur har koe lower case mai ho jata hai User -> users || Todo -> todos

// this is an interview Q kie maine nam diya hai yaha pai toh yeh DB mai kaisai dikhae daiga

// YEH toh structure hai data toh gaya he nhi
// yeh jo schema hai iskai andar jo object hai {} issi kai andar hum data rakhtai hai

// literally itna he hai model banana ab yaha pai ek feild ho ya 2 feild ho ya 200 feild ho kam itna he asan hai
