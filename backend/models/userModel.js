import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
  name:{type:String, requierd:true},
  email:{type:String,requierd:true, index:true,unique:true},
  password:{type:String,required:true},
  isAdmin:{type:Boolean, required:true, default:false}
});

const User = mongoose.model('User', userSchema);
export default User;