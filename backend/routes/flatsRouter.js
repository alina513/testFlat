const express = require("express");
const { schemas } = require("../models/flats.js");
const validateBody = require("../helpers/validateBody.js");
const isValidId = require("../helpers/isValidId.js");

const ctrl = require("../controllers/flatsController.js");
const flatsRouter = express.Router();
flatsRouter.get("/", ctrl.getAllFlats);

flatsRouter.post("/", validateBody(schemas.createFlatSchema), ctrl.createFlat);

flatsRouter.delete("/:id", isValidId, ctrl.deleteFlate);

flatsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.updateFlateSchema),
  ctrl.updateFlate
);

module.exports = flatsRouter;
