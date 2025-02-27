const { Schema, model } = require("mongoose");
const Joi = require("joi");

const FlatsSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is required"], maxlength: 90 },
    description: { type: String, maxlength: 335, required: [true, "Description is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    rooms: { type: Number, required: [true, "Number of rooms is required"], enum: [1, 2, 3] },
    photoURL: { type: String },
    animals: { type: Boolean, required: true },
    gasEquipment: { type: String, enum: ["electric", "gas", "central"], required: true },
    wardrobe: { type: Boolean, required: true },
    bathroom: { type: Number, enum: [1, 2, 3], required: true },
    airConditioner: { type: Number, enum: [1, 2, 3], required: true },
    fullDescription: { type: String, required: true },
    district: { 
      type: String, 
      enum: [
        "Дарницький", "Оболонський", "Печерський", "Шевченківський", 
        "Голосіївський", "Деснянський", "Дніпровський"
      ],
      required: true 
    },
    parking: { type: Boolean, required: true },
    floor: { type: Number, required: true },
    maxPeople: { type: Number, required: true },
    contacts: [
      {
        name: { type: String, required: true }, 
        email: { type: String, required: true }, 
        phone: { type: String, required: true }, 
        message: { type: String, default: "" }, 
        createdAt: { type: Date, default: Date.now }, 
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Flat = model("flates", FlatsSchema);

const createFlatSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  rooms: Joi.number().valid(1, 2, 3).required(),
  animals: Joi.boolean().required(),
  gasEquipment: Joi.string().valid("electric", "gas", "central").required(),
  wardrobe: Joi.boolean().required(),
  bathroom: Joi.number().valid(1, 2, 3).required(),
  airConditioner: Joi.number().valid(1, 2, 3).required(),
  fullDescription: Joi.string().required(),
  district: Joi.string().valid(
    "Дарницький", "Оболонський", "Печерський", "Шевченківський", 
    "Голосіївський", "Деснянський", "Дніпровський"
  ).required(),
  parking: Joi.boolean().required(),
  floor: Joi.number().required(),
  maxPeople: Joi.number().required(),
});

const updateFlateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  rooms: Joi.number().valid(1, 2, 3),
  animals: Joi.boolean(),
  gasEquipment: Joi.string().valid("electric", "gas", "central"),
  wardrobe: Joi.boolean(),
  bathroom: Joi.number().valid(1, 2, 3),
  airConditioner: Joi.number().valid(1, 2, 3),
  fullDescription: Joi.string(),
  district: Joi.string().valid(
    "Дарницький", "Оболонський", "Печерський", "Шевченківський", 
    "Голосіївський", "Деснянський", "Дніпровський"
  ),
  parking: Joi.boolean(),
  floor: Joi.number(),
  maxPeople: Joi.number(),
});

const createContactFlatSchema = Joi.object({
  name: Joi.string().required(), 
  email: Joi.string().required(), 
  phone: Joi.string().required(), 
  message: Joi.string().allow(null, ""),
});

const schemas = { createFlatSchema, updateFlateSchema, createContactFlatSchema };

module.exports = { Flat, schemas };
