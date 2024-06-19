import {Request } from 'express'
export interface Hotel{
    Id: string,
    Name: string,
    HLocation: string,
    StarRating: string
    
    
    
    
}
interface AddHotel{
    Name: string,
    HLocation: string,
    StarRating: string
   
    
    
}
export interface HotelRequest extends Request{
    body: AddHotel
}