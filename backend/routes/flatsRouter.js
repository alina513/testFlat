const express = require("express");
const { schemas } = require("../models/flats.js");
const validateBody = require("../helpers/validateBody.js");
const isValidId = require("../helpers/isValidId.js");
const upload = require("../middlewares/upload.js")

const ctrl = require("../controllers/flatsController.js");
const flatsRouter = express.Router();
flatsRouter.get("/", ctrl.getAllFlats);

flatsRouter.get("/:id", ctrl.getOneFlateById);

flatsRouter.post("/", validateBody(schemas.createFlatSchema), ctrl.createFlat);

flatsRouter.post("/:id/contact", isValidId,  validateBody(schemas.contactFormSchema), ctrl.addContactForm);

flatsRouter.delete("/:id", isValidId, ctrl.deleteFlate);

flatsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.updateFlateSchema),
  ctrl.updateFlate
);
flatsRouter.patch(
  "/:id",
  isValidId,
  upload.single("flatPhotos"),
  ctrl.updatePhoto
);

module.exports = flatsRouter;
