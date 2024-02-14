
/* import the model here to find data from database */
const users = require('../Model/userSchema')

/* import jwt */
const jwt = require('jsonwebtoken')

/* logic for register */
exports.register =async (req,res)=>{
    console.log('inside usercontroller register logic');

    /* destructuring the data from the client request body*/
     const {username,email,password}=req.body


    try{
     
     /*collectionname.findone({condition})*/
      const existingUser = await users.findOne({email:email})
      
      if (existingUser) {

        /* if find one returns document it means that the user already exist */
        /* so we are sendinf response in the 400 series (client server error) */
         res.status(406).json('Account already exist ...Please Login')
      } else {
       
        /* if find one returns null it means the email id is no registerd so we reguster the user */
        /* create object to register the user  */
        /* create object for the model */

        const newUser = new users({
            username,
            email,
            password
        })

        /* add the object we use save() method in mongoose*/

       await newUser.save()
         
       res.status(200).json(newUser)
      }

     }catch(err){
        res.status(401).json('Register register fsiled due to',err)
     }
}


/* logic for login  */

exports.login = async(req,res)=>{

  console.log('inside logic function');

  const {email,password} = req.body

  try{  const existingUser = await users.findOne({email,password})
  
     
    if (existingUser) {
        
      /* sign is the function to create a token */
      /* 1st argument is payload  */
      /* 2nd argument is - secretkey - based on which the token is generated*/
       const token = jwt.sign({userId:existingUser._id},"supersecretkey123")
       res.status(200).json({

        existingUser,
        token

       })

  } else {
    res.status(406).json('Invalid email id or password')
  }
  }catch(err){
   res.status(401).json('Login failed due to ', err)
  }

  }

  /* get all userdata */

  /* 
    exports.getAllUserData = async(req,res)=>{

    try {
      const allUsers = await bookings.find()
      res.status(200).json(allUsers)
    } catch (err) {
      res.status(401).json(`Request failed due to ${err}`)
    }
  }

  */



