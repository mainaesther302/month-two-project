import {Request } from 'express'
export interface Tour{
    Id: string,
    Name: string,
    Tdestination: string,
    Tdescription: string,
    Tprice: number,
    
    
    
}
interface AddTour{
    Name: string,
    Tdestination: string,
    Tdescription: string,
    Tprice: number,
    
    
}
export interface TourRequest extends Request{
    body: AddTour
}