import { Router } from "express";
import {
  createContact,
  getContact,
  createLogin,
  getLogin,
  deleteContact,
  addToCartt,
  getCart,
  deleteCartItemByName,
  createSignup,
  getSignup,
  deleteSignup
 
} from "../controllers/contactformcontroler";
// import { updateContact } from "../controllers/contactformcontroler";

import { authorise } from "../middleware/auth.middleware";

const router = Router();

// Contact
router.post("/contact", authorise, createContact);
router.get("/getcontact", authorise, getContact);
router.post("/login", authorise, createLogin);
router.get("/getlogin", authorise, getLogin);
router.delete("/deleteContact/:id", authorise, deleteContact);

// Update contact by ID
// router.put("/contact/:id", authorise, updateContact);

//Cart
router.post("/cart", authorise, addToCartt);
router.get("/cart", authorise, getCart); 
router.delete("/delete", deleteCartItemByName);

//signup
router.post("/signup", createSignup);
router.get("/signup", getSignup);
router.delete("/signup/delete", deleteSignup);

export default router;
