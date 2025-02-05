const { Schema, model } = require("mongoose");
const Joi = require("joi");

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
    }
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

const schemas = { createFlatSchema, updateFlateSchema };

module.exports = { Flat, schemas };
