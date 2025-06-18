
export interface Contact {
   UserId:String;
  FirstName:string;
  LastName:string;
  Email: string;
  PhoneNumber:string;
  Address:string;
  YourFeedback:String;
 }
 export interface Login{
  email:String;
  password:String;
 }

export interface CartItem {
  userId: string;
  title: string;
  price: string;
}

export interface Signup{
  Username:"String";
  Email:"String";
  Password:"String"
}

