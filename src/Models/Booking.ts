import {Request } from 'express'
export interface Booking{
    Id : string,
    UserId: string,
    TourId: string,
    HotelId: string,
    BStartDate: string,
    BEndDate: string,
    BookingDate: string,
    BGuest:number,
    BStatus: string,
    isDeleted: number,
    BEmailSent: number

    
}
interface AddBooking{
    UserId: string,
    TourId: string,
    HotelId: string,
    BStartDate: string,
    BEndDate: string,
    BookingDate: string,
    BGuest:number,
    BStatus: string,
    isDeleted: number,
    BEmailSent: number
   
    
    
}
export interface BookingRequest extends Request{
    body: AddBooking
}