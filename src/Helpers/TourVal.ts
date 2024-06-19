import Joi from 'joi';
export const TourSchema = Joi.object({
    Name:Joi.string().required().messages({
        'any.required':'Name is required'
    }),
    Tdestination:Joi.string().required().messages({
        'any.required':'Destination is required'
    }),
    Tdescription:Joi.string().required().messages({
        'any.required':'Description is required'
    }),
    Tprice:Joi.number().required().messages({
        'any.required':'Price is required'
    })
})