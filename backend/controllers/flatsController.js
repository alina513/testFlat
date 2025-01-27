const { Flat } = require("../models/flats.js");
const HttpError = require("../helpers/HttpError.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");



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

const createFlat = async (req, res) => {
  const result = await Flat.create({ ...req.body });
  if (!result) {
    throw HttpError(400);
  }
  res.status(201).json(result);
};

const updateFlate = async (req, res) => {
  console.log(req)
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }
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

const updateFlatPhoto = async (req, res) => {
  const { id } = req.params;
  const photo = req.file;

  // Перевірка наявності фото
  if (!photo) {
    return res.status(400).json({ message: "Photo is required" });
  }

  // Оновлення фото через findOneAndUpdate
  const flat = await Flat.findOneAndUpdate(
    { _id: id }, // пошук квартири за id
    { $set: { photos: `/uploads/${photo.filename}` } }, // оновлення фото
    { new: true } // повернення оновленого документа
  );

  if (!flat) {
    return res.status(404).json({ message: "Flat not found" });
  }

  // Видалення старого фото, якщо воно є
  if (flat.photos && flat.photos !== "/uploads/default-flat.jpg") {
    const oldPhotoPath = path.join(__dirname, "../", flat.photos);
    if (fs.existsSync(oldPhotoPath)) {
      try {
        fs.unlinkSync(oldPhotoPath);
      } catch (err) {
        return res.status(500).json({ message: "Error deleting old photo", error: err.message });
      }
    }
  }

  // Відповідь з оновленим фото
  res.status(200).json({ message: "Photo updated", photo: flat.photos });
};



module.exports = {
  getAllFlats: ctrlWrapper(getAllFlats),
  createFlat: ctrlWrapper(createFlat),
  deleteFlate: ctrlWrapper(deleteFlate),
  updateFlate: ctrlWrapper(updateFlate),
  updateFlatPhoto: ctrlWrapper(updateFlatPhoto),
};
