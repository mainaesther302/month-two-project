import {Router} from 'express'
import {AddTour,UpdateTour,GetTours,DeleteTour,GetTour} from "../controllers/Tour"

const tourRouter = Router()

tourRouter.get("",GetTours)
tourRouter.get("/:Id",GetTour) 
tourRouter.post("", AddTour )
tourRouter.patch("/:Id", UpdateTour)
tourRouter.delete("/:Id",DeleteTour )


export default tourRouter;