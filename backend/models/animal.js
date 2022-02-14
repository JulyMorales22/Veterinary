import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name:String,
    race:String,
    weight:Number,
    height:Number,
    health: String,
    age:Number,
    type:String,
    registerDate: {type: Date, default: Date.now},
    dbStatus: Boolean,
});

const animal = mongoose.model("animals", animalSchema);
export default animal;