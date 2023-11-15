import Joi from "joi";

const contactsAddShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

export default contactsAddShema;
