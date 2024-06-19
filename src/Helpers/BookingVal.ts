import Joi from 'joi'
export const BookingSchema = Joi.object({
    UserId:Joi.string().required().messages({
        'any.required':'UserId is required'
    }),
    TourId:Joi.string().required().messages({
        'any.required':'UserId is required'
    }),
    HotelId:Joi.string().required().messages({
        'any.required':'HotelId is required'
    }),
    BStartDate:Joi.string().required().messages({
        'any.required':'Booking start Date is required'
    }),
    BEndDate:Joi.string().required().messages({
        'any.required':'Booking End Date is required'
    }),
    BookingDate:Joi.string().required().messages({
        'any.required':'Booking Date is required'
    }),
    BGuest:Joi.string().required().messages({
        'any.required':'Number of Guest is required'
    }),
    BStatus:Joi.string().required().messages({
        'any.required':'Booking status is required'
    }),
    BEmailSent:Joi.string().required().messages({
        'any.required':'email  is required'
    })
   
   
})