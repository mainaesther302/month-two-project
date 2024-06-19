import {Router} from 'express'
import {AddBooking,UpdateBooking,DeleteBooking, GetBookings,GetBooking} from "../controllers/Booking"

const bookingRouter = Router()

bookingRouter.get("",GetBookings )
bookingRouter.get("/Id",GetBooking) 
bookingRouter.post("", AddBooking )
bookingRouter.put("/Id", UpdateBooking)
bookingRouter.delete("/Id",DeleteBooking )

export default bookingRouter;