const { Flat } = require("../models/flats.js");
const HttpError = require("../helpers/HttpError.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");
const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");

const photosDir = path.join(__dirname, "../", "public", "flatPhotos");

const getAllFlats = async (req, res) => {
  const { priceMin, priceMax, rooms } = req.query;
  const filter = {};
  if (priceMin) {
    filter.price = { ...filter.price, $gte: Number(priceMin) };
  }
  if (priceMax) {
    filter.price = { ...filter.price, $lte: Number(priceMax) };
  }
  if (rooms) {
    filter.rooms = Number(rooms);
  }
  const result = await Flat.find(filter);

  res.json(result);
};


const getOneFlateById = async (req, res) => {
  const { id } = req.params;
  const result = await Flat.findOne({
    _id: id});
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createFlat = async (req, res) => {
  const result = await Flat.create({ ...req.body });
  if (!result) {
    throw HttpError(400);
  }
  res.status(201).json(result);
};

const updateFlate = async (req, res) => {
  const { id } = req.params;
  const result = await Flat.findOneAndUpdate(
    {
      _id: id,
    },
    req.body,
    { new: true }
  );
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const deleteFlate = async (req, res) => {
  const { id } = req.params;
  const result = await Flat.findOneAndDelete({ _id: id });
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};


const updatePhoto = async(req, res) => {
  const {id} = req.params;
  if(!req.file) {
      throw HttpError(400, "No file uploaded");
  }
  const {path: tempUpload, originalname} = req.file;
  const image = await Jimp.read(tempUpload);
  const resizedImage = await image.resize(250, 250);
  await resizedImage.writeAsync(tempUpload);
  const fileName = `${id}_${originalname}`;
  const resultUpload = path.join(photosDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  const photoURL = path.join("flatPhotos", fileName);
  await Flat.findByIdAndUpdate(id, {photoURL});
  res.json({
      photoURL,})
  }
  const addContactForm = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, phone, message } = req.body;
  
      const flat = await Flat.findById(id);
  
      if (!flat) {
        return res.status(404).json({ message: "Квартира не знайдена" });
      }
      if (!flat.contacts) {
        flat.contacts = [];
      }
      flat.contacts.push({ name, email, phone, message, createdAt: new Date() });
  
      await flat.save(); 
  
      res.status(201).json({ message: "Контакт успішно додано!", flat });
    } catch (error) {
      res.status(500).json({ message: "Помилка сервера", error: error.message });
    }
  };
  

module.exports = {
  getAllFlats: ctrlWrapper(getAllFlats),
  createFlat: ctrlWrapper(createFlat),
  deleteFlate: ctrlWrapper(deleteFlate),
  updateFlate: ctrlWrapper(updateFlate),
  updatePhoto: ctrlWrapper(updatePhoto),
  getOneFlateById: ctrlWrapper(getOneFlateById),
  addContactForm: ctrlWrapper(addContactForm),
};
