import {Router} from 'express'
import {AddHotel,UpdateHotel,DeleteHotel, GetHotels,GetHotel} from "../controllers/Hotel"

const hotelRouter = Router()

hotelRouter.get("",GetHotels )
hotelRouter.get("/:Id",GetHotel) 
hotelRouter.post("", AddHotel )
hotelRouter.patch("/:Id", UpdateHotel)
hotelRouter.delete("/:Id",DeleteHotel )

export default hotelRouter;