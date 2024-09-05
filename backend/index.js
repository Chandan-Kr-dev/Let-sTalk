import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import {User} from './models/user.models.js'

const app = express();
const port = 3000;

dotenv.config();
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const dbconn = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://chandankr:${process.env.MONGODB_PASS}@cluster0.cqz1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
      console.log(`Mongo DB connected Successfully : ${conn.connection.host}`);
    } catch (error) {
      console.error(error);
    }
  };
  dbconn();

  const saltrounds = 2;

  const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltrounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };
  const verifyPassword = async (passwordentered, storedpassword) => {
    const isMatch = await bcrypt.compare(passwordentered, storedpassword)
    return isMatch;
  };
  
  

app.post('/api/signup',async(req,res)=>{
    const {UserName,Email,Password}=req.body
    
    try {
        const existingUser = await User.findOne({UserName});
        if (existingUser) {
          return res.status(400).json("User already exists");
        }
    
        const hashPassword = await hashedPassword(Password);
    
        const newUser = await User.create({
          UserName,
          Email,
          Password: hashPassword,
        });
    
        res.status(201).json("User created");
      } catch (error) {
        console.error(error);
        res.status(500).json("Server error");
      }
})


app.post("/api/login", async (req, res) => {
    try {
      const { UserName, Password } = req.body;
      await User.findOne({ UserName }).then((user) => {
        if (user) {
          if (verifyPassword(Password, user.Password)) {
            res.json("Success");
          } else {
            res.json("Password Incorrect");
          }
        } else {
          res.json("Invalid Credentials");
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Invalid Password or username" })
    }
  });


app.get("/", (req, res) => {
  res.send("App Working !!!");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
});
