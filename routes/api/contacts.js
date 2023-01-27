const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { controlerWrapper } = require("../../helpers");

const { validBody } = require("../../middleware");
const { schemas } = require("../../models/contact");

router.get("/", controlerWrapper(ctrl.listContacts));

router.get("/:contactId", controlerWrapper(ctrl.getContactById));

router.post(
  "/",
  validBody(schemas.addSchema),
  controlerWrapper(ctrl.addContact)
);

router.delete("/:contactId", controlerWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validBody(schemas.addSchema),
  controlerWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validBody(schemas.updateFavoriteSchema),
  controlerWrapper(ctrl.updateStatusContact)
);

module.exports = router;
