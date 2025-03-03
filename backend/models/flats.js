const { Schema, model } = require("mongoose");
const Joi = require("joi");

const FlatsSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is required"], maxlength: 90 },
    description: { type: String, maxlength: 335, required: [true, "Description is required"] },
    fullDescription: { type: String, required: true },
    price: { type: String, required: [true, "Price is required"] },
    rooms: { type: String, required: [true, "Number of rooms is required"], enum: ["1" ,"2", "3"] },
    photoURL: { type: String },
    animals: { type: Boolean, required: true },
    gasEquipment: { type: String, enum: ["газове", "електричне", "центральне"] ,required: true },
    wardrobe: { type: Boolean, required: true },
    bathroom: { type: String, enum: ["1", "2", "3"], required: true },
    airConditioner: { type: String, enum: ["1", "2"," 3"], required: true },
    district: { 
      type: String, 
      enum: [
        "Дарницький", "Оболонський", "Печерський", "Шевченківський", 
        "Голосіївський", "Деснянський", "Дніпровський"
      ],
      required: true 
    },
    parking: { type: Boolean, required: true },
    floor: { type: String, required: true },
    maxPeople: { type: String, required: true },
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
  fullDescription: Joi.string().required(),
  price: Joi.string().required(),
  rooms: Joi.string().valid("1", "2", "3").required(),
  animals: Joi.boolean().required(),
  gasEquipment: Joi.string().valid("газове", "електричне", "центральне").required(),
  wardrobe: Joi.boolean().required(),
  bathroom: Joi.string().valid("1", "2","3").required(),
  airConditioner: Joi.string().valid("1"," 2", "3").required(),
  district: Joi.string().valid(
    "Дарницький", "Оболонський", "Печерський", "Шевченківський", 
    "Голосіївський", "Деснянський", "Дніпровський"
  ).required(),
  parking: Joi.boolean().required(),
  floor: Joi.string().required(),
  maxPeople: Joi.string().required(),
});

const updateFlateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  fullDescription: Joi.string(),
  price: Joi.string(),
  rooms: Joi.string().valid("1", "2", "3"),
  animals: Joi.boolean(),
  gasEquipment: Joi.string().valid("газове", "електричне", "центральне"),
  wardrobe: Joi.boolean(),
  bathroom: Joi.string().valid("1", "2", "3"),
  airConditioner: Joi.string().valid("1", "2", "3"),
  fullDescription: Joi.string(),
  district: Joi.string().valid(
    "Дарницький", "Оболонський", "Печерський", "Шевченківський", 
    "Голосіївський", "Деснянський", "Дніпровський"
  ),
  parking: Joi.boolean(),
  floor: Joi.string(),
  maxPeople: Joi.string(),
});

const createContactFlatSchema = Joi.object({
  name: Joi.string().required(), 
  email: Joi.string().required(), 
  phone: Joi.string().required(), 
  message: Joi.string().allow(null, ""),
});

const schemas = { createFlatSchema, updateFlateSchema, createContactFlatSchema };

module.exports = { Flat, schemas };
