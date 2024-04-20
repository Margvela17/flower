import mongoose from 'mongoose';
const { Schema } = mongoose;

const flowerSchema = new Schema({
  name:String,
  price:Number,
  description:String,
  img:String,
});


const Flower = mongoose.models.Flowers || mongoose.model('Flowers', flowerSchema);
export default Flower;