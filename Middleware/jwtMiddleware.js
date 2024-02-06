
/* import jwt */

const jwt = require('jsonwebtoken')


const jwtMiddleware = (req,res,next)=>{
    console.log('inside jwt middleware');
    /* logic for middleware */

    /* from the header we will get both bearer and token */
    /* here we will get both token and bearer we need only token 
       so we separate the token. after 1st space and 1st index there will token*/
      const token = req.headers['authorization'].split(' ')[1]
      console.log(token);
      
     /* logic for verifiying token we will give in try catch block */
      
     try {
                 /* 1st argument should be token and 2nd argument will be secretkey */
        const jwtResponse = jwt.verify(token,"supersecretkey123")
        console.log(jwtResponse);
        /* payload is the keydefined by myself */
        /* userId will be got from the jwtResponse from jwt*/
        req.payload = jwtResponse.userId
        next()
     } catch (error) {
        res.status(401).json('Authorization failed...Please Login')
     }
    
}

module.exports = jwtMiddleware