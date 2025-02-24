const { Schema, model } = require("mongoose");
const Joi = require("joi");

const formSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const FlatsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: 90,
    },
    description: {
      type: String,
      maxlength: 335,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    rooms: {
      type: Number,
      required: [true, "Number of rooms is required"],
      enum: [1, 2, 3],
    },
    photoURL: {
      type: String,
    },
    contacts: [formSchema],
  },
  { versionKey: false, timestamps: true }
);


const Flat = model("flates", FlatsSchema);

const createFlatSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  rooms: Joi.number().required(),
});

const updateFlateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  rooms: Joi.number(),
});

const contactFormSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  message: Joi.string(),
});

const schemas = { createFlatSchema, updateFlateSchema, contactFormSchema };

module.exports = { Flat, schemas };
