

import { Contact } from "../../src/dtos/Contactdtos";
import { ContactModel } from "../models/Contactformmodel";
import { Login } from "../../src/dtos/Contactdtos";
import { LoginModel } from "../models/Contactformmodel";
import {CartItem} from '../../src/dtos/Contactdtos';
import {CartModel,} from '../../src/models/Contactformmodel';
import { v4 as uuidv4 } from 'uuid';

export const CreateContact = async (contactData: Contact) => {
  const { Email, PhoneNumber } = contactData;

  if (!Email || !Email.includes("@")) {
    throw new Error("Invalid email format. Must include '@'.");
  }

  const phoneRegex = /^\d{10}$/;
  if (!PhoneNumber || !phoneRegex.test(PhoneNumber)) {
    throw new Error("Invalid phone number. Must be exactly 10 digits.");
  }
 const existingContact = await ContactModel.findOne({ Email });
  if (existingContact) {
    throw new Error("You are already registered.");
  }

  const contactModel = await ContactModel.create(contactData);
  return contactModel;
};

export const GetContact = async () => {
  const contact = await ContactModel.find();
  return contact;
};

export const CreateLogin = async (login: Login) =>{
    const loginModel = await LoginModel.create(login);
    return loginModel;
};
export const GetLogin = async () =>{
    const Login = await LoginModel.find();
    return Login;
};
export { ContactModel };




export const addToCart = async (cartData: CartItem) => {
  const cartItemWithId = {
    ...cartData,
    userId: uuidv4(), 
  };
  return await CartModel.create(cartItemWithId);
};

export const removeFromCart = async (id: string) => {
  return await CartModel.findByIdAndDelete(id);
};

export const getCartItems = async () => {
  return await CartModel.find(); 
};

  

// src/services/cart.service.ts

// // PUT: Update Contact by ID
// export const UpdateContactById = async (id: string, updatedData: Partial<Contact>) => {
//   try {
//     // Basic validation (optional)
//     if (updatedData.Email && !updatedData.Email.includes("@")) {
//       throw new Error("Invalid email format.");
//     }

//     if (updatedData.PhoneNumber && !/^\d{10}$/.test(updatedData.PhoneNumber)) {
//       throw new Error("Phone number must be 10 digits.");
//     }

//     const updatedContact = await ContactModel.findByIdAndUpdate(
//       id,
//       { $set: updatedData },
//       { new: true, runValidators: true }
//     );

//     if (!updatedContact) {
//       throw new Error("Contact not found or update failed.");
//     }

//     return updatedContact;
//   } catch (error) {
//     throw new Error((error as Error).message);
//   }
// };


import { Signup } from '../../src/dtos/Contactdtos'; // Adjust path if needed
import { SignupModel } from '../../src/models/Contactformmodel'; // Your Mongoose model

export const CreateSignup = async (signupData: Signup) => {
  const { Email } = signupData;

  if (!Email || !Email.includes("@")) {
    throw new Error("Invalid email format. Must include '@'.");
  }

  const existingUser = await SignupModel.findOne({ Email });
  if (existingUser) {
    throw new Error("You are already signed up.");
  }

  const newSignup = await SignupModel.create(signupData);
  return newSignup;
};

export const GetSignup = async () => {
  const users = await SignupModel.find();
  return users;
};

export const DeleteSignupByUsername = async (Username: string) => {
  return await SignupModel.findOneAndDelete({ Username });
};