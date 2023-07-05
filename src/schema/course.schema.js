import Joi from 'joi'

export const courseSchema = Joi.object({
	title: Joi.string().max(10).required(),
	price: Joi.number().required()
}).required()