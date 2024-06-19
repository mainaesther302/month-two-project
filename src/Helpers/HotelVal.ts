import Joi from 'joi';
export const HotelSchema = Joi.object({
    Name:Joi.string().required().messages({
        'any.required':'Name is required'
    }),
    HLocation:Joi.string().required().messages({
        'any.required':'location is required'
    }),
    StarRating:Joi.string().required().messages({
        'any.required':'Rating is required'
    })
   
})