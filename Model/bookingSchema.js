

const mongoose = require('mongoose')

const validator = require('validator')

const bookingSchema = new mongoose.Schema({

    username:{
        type:String,
        require:true,
        min: [3, 'Must be at least 3, got only {value}']
    },
    mobilenumber:{
        type:String,
        require:true,
        min: [10, 'Must be at least 10, got only {value}']
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
    vehiclenumber:{
        type:String,
        require:true,
        min: [6, 'Must be at least 6, got only {value}']   
    },
    date:{
        type:String,
        require:true,
    },
    time:{
        type:String,
        require:true,
    },
    wash:{
        type:Array,
        require:true,
    },
    detail:{
        type:Array,
        require:true,
    },
    interior:{
        type:Array,
        require:true,
    },
    cartype:{
        type:String,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    }
})

const bookings = mongoose.model("booking",bookingSchema)

module.exports=bookings

/* 
 validator(value){
            if (!validator.isMobilePhone) {
                throw new Error('Invalid Mobile Number')
            }
        } */


/* 
 validator(value){
            if (!validator.isAlphanumeric(value)) {
                throw new Error('Invalid Vehicle Number')
            }
        } */