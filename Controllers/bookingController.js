
/* import bookingSchema */

const booking = require('../Model/bookingSchema')

/* add project */

exports.addBooking = async(req,res)=>{
   
    console.log('inside booking request');
 
    /* all these value userId we will get by destructuring the reqbody */
    const userId = req.payload
    console.log(userId);

    /* the rest of the data we will need to get from the FromData from frontend
    to get that data we need multerconcept. multer is a middleware to get the image*/
   
    const{username,mobilenumber,email,vehiclenumber,date,time,wash,detail,interior,cartype} = req.body
    console.log(`${username},${mobilenumber},${email},${vehiclenumber},${date},${time},${wash},${detail},${interior},${cartype}`);

    try {

        const existingBooking = await booking.findOne({mobilenumber})
        if (existingBooking) {
            res.status(406).json('Booking Already Exist')
        } else {
            const newBooking = booking({
                username,mobilenumber,email,vehiclenumber,date,time,wash,detail,interior,cartype,userId
            })
            await newBooking.save()
            res.status(200).json(newBooking)
        }
        
    } catch (err) {
        res.status(401).json(`Request failed due to ${err}`)
        
    }


    
}