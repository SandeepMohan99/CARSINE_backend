/* import mongoose */

const mongoose = require('mongoose')

/* npm i validator */
/* import validator to validate emailid */
const validator = require('validator')



/* create schema - use schema class in mongoose */
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min: [3, 'Must be at least 6, got only {value}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid Email')
            }
        }
    },
    password:{
        type:String,
        require:true
    },
    
})

/* create model */
/* "users" is the collection name in mongodb */
/* userschema is the name of the structure.*/
const users = mongoose.model("users",userSchema)


/* export the modal */
/* users is the variable name of modal*/
module.exports = users