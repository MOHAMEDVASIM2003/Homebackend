import mongoose, { Document, Schema } from "mongoose";
import { Contact } from '../../src/dtos/Contactdtos'
import {Login} from '../../src/dtos/Contactdtos'
import {CartItem} from '../../src/dtos/Contactdtos'
import {Signup} from '../../src/dtos/Contactdtos'
//Login
const ContactSchema = new Schema<Contact>(
    {
        FirstName:{type: String,required:true},
        LastName:{type: String,required:true},
        Email: { type: String, required: true },
        PhoneNumber: { type: String, required: true },
        Address:{type: String,required:true},
        YourFeedback:{type: String,required:true},
        UserId:{type: String,required:true,unique: true}
    },
    {
        timestamps: true,
    },
);
const LoginSchema =new Schema<Login>(
    {
        email:{ type: String, required: true },
        password:{ type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const CartSchema = new Schema<CartItem>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: false },
    price: { type: String, required: false }
  },
  { timestamps: true }
);
const SignupSchema = new Schema<Signup>(
  {
    Username: { type: String, required: true },
    Email: { type: String, required: false },
    Password: { type: String, required: false }
  },
  { timestamps: true }
);


export const ContactModel = mongoose.model<Contact>("Contact", ContactSchema);
export const LoginModel = mongoose.model<Login>("Login",LoginSchema);
export const CartModel = mongoose.model<CartItem>("CartItem",CartSchema);
export const SignupModel = mongoose.model<Signup>("Signup",SignupSchema);