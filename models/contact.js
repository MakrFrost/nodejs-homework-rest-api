const { Schema, model } = require("mongoose");
const { handleSaveError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 14,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  favorite: Joi.boolean(),
});

const schemasOpt = Joi.object({
  name: Joi.string(),
  phone: Joi.string(),
  email: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  schemasOpt,
  updateFavoriteSchema,
};

contactSchema.post("save", handleSaveError);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};

// hw04
