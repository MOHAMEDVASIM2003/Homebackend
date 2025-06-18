

import { Request, Response } from "express";
import { Contact } from "../../dtos/Contactdtos";
import { CreateContact,GetContact,CreateLogin,GetLogin,ContactModel} from "../../services/ContactServices";
import { Login } from "../../dtos/Contactdtos";
import { CartItem } from "../../dtos/Contactdtos";
import {addToCart, removeFromCart,getCartItems,} from '../../services/ContactServices'
import { CartModel } from "../../models/Contactformmodel";
import { v4 as uuidv4 } from "uuid";
import { CreateSignup, GetSignup,DeleteSignupByUsername} from "../../services/ContactServices";
import {Signup} from "../../dtos/Contactdtos"
export const createContact = async (req: Request, res: Response) => {
  try {
    const login = req.body as Contact;
    const newLogin = await CreateContact(login);
    res.status(200).json(newLogin);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getContact = async (req: Request, res: Response) => {
  const logins = await GetContact();
  res.status(200).json(logins);
};

// controller
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ContactModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contact" });
  }
};


export const createLogin = async (req: Request, res: Response) => {
  const log = req.body as Login;
  const newlog = await CreateLogin(log);
  res.status(200).json(newlog);
};


export const getLogin = async (req: Request, res: Response) => {
  const logs = await GetLogin();
  res.status(200).json(logs);
};

//post

export const addToCartt = async (req: Request, res: Response): Promise<void> => {
  try {
    const card = req.body;
    const saved = await addToCart(card);
    res.status(200).json(saved);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get cart items (admin)
export const getCart = async (_req: Request, res: Response) => {
  try {
    const cartItems = await getCartItems();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
};

//delete code
export const deleteCartItemByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400).json({ message: "Missing title" });
      return;
    }

    const result = await CartModel.findOneAndDelete({ title });

    if (!result) {
      res.status(404).json({ message: "Item not found" });
      return;
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};



export const createSignup = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body as Signup;
    const newUser = await CreateSignup(user);
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getSignup = async (req: Request, res: Response): Promise<void> => {
  const allUsers = await GetSignup();
  res.status(200).json(allUsers);
};

export const deleteSignup = async (req: Request, res: Response): Promise<void> => {
  const { username } = req.body;
  const deleted = await DeleteSignupByUsername(username);
  res.status(200).json(deleted);
};


// import { UpdateContactById } from "../../services/ContactServices";

// export const updateContact = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const updated = await ContactModel.findByIdAndUpdate(id, req.body, { new: true });

//     if (!updated) {
//       res.status(404).json({ message: "Contact not found" });
//       return;
//     }

//     res.status(200).json(updated);
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// };
