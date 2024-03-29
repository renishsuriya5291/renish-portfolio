const path = require("path");
const dotenv = require("dotenv");
const express = require('express')
require('./conn');
const User = require('./model/userSchema')
const app = express()
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded());

const staticPath = path.join(__dirname,'public' )

// built in middleware 
app.use(express.static(staticPath));

app.get('/static',()=> {
    res.send("hello");
})

app.post('/', async (req,res)=>{
  
  const {name, phone, email, subject, message} = req.body;

  if(!name || !email || !phone || !subject || !message){
      return res.status(422).json({error: "please fill all the data"});
  }

  try{
      const userExist = await  User.findOne({email: email})
      
      if(userExist){
          return res.status(422).json({error: "Message Already sent.."});
      }
      const user = new User({name, phone, email, subject, message})
      
      const userRegister = user.save();

      if(userRegister){
          res.status(201).json({message: "Message Sent.."})
      }
          
  }catch (err){
      console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})