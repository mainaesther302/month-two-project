import { Request, Response, RequestHandler } from 'express';
import { v4 as uuid } from 'uuid';
import { sqlConfig } from '../config/auth';
import mssql from 'mssql';
import { BookingRequest, Booking } from '../Models/Booking';
import { DbHelper } from '../DatabaseHelpers';
import { BookingSchema } from '../Helpers/BookingVal';

//***********************Add Booking****************************** */

const dbInstance=new DbHelper()
export const AddBooking: RequestHandler = async (req: BookingRequest, res: Response) => {
  try {
    const Id = uuid();
    const { UserId,TourId,HotelId,BStartDate, BEndDate,BookingDate,BGuest,BStatus,BEmailSent } = req.body;
    const { error } = BookingSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })

    }
    await dbInstance.exec("addBooking", { Id: Id, UserId,TourId,HotelId,BStartDate, BEndDate,BookingDate,BGuest,BStatus,BEmailSent  })
res.status(201).json({ message: 'booking added successfully' });
} catch (error:any) {
res.status(500).json({ error: error.message });
}
};
//************************************Get all bookings************************* */
export const GetBookings: RequestHandler = async (req: BookingRequest, res: Response) => {
    try {
      const bookings = (await dbInstance.exec("getBookings", {})).recordset as Booking[]
      res.status(200).json(bookings);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  };
//*************************************Get one booking*********************************** */
export const  GetBooking:RequestHandler=async (req,res)=>{
    try {
        const booking=( await dbInstance.exec("getBooking",{Id:req.params.Id})).recordset[0] as Booking
        if (booking){
            return res.status(200).json(booking);
        }
        else{
            return res.status(404).json({message:'booking not found'})
        }
        
    } catch (error) {
        return res.status(500).json({message:"Something went wrong "+error });
        
    }

}

//*************************************Update Booking*********************************** */
export const UpdateBooking: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { error } = BookingSchema.validate(req.body)
          if (error) {
              return res.status(400).json({ message: error.details[0].message })
  
          }
          const booking = (await dbInstance.exec("getBooking", {})).recordset[0] as Booking
  
          if (booking && booking.Id) {
              const { UserId,TourId,HotelId,BStartDate, BEndDate,BookingDate,BGuest,BStatus,BEmailSent } = req.body
              await dbInstance.exec("updateBooking", { Id: booking.Id, UserId,TourId,HotelId,BStartDate, BEndDate,BookingDate,BGuest,BStatus,BEmailSent })
              return res.status(200).json({ message: "Booking updated successfully" })
  
          }
  
      
      }
     
    catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  };
//******************************DELETE BOOKING**************************** */
export const DeleteBooking: RequestHandler = async (req: Request, res: Response) => {
    try {
        const booking = (await dbInstance.exec("getBooking", { Id: req.params.Id })).recordset[0] as Booking
        if (booking && booking.Id) {
            await dbInstance.exec("deleteBooking", { Id: req.params.Id })

            res.status(200).json({ message: 'Booking deleted successfully' });
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}