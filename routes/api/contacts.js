const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { controlerWrapper } = require("../../helpers");
const { validBody, authWrap } = require("../../middleware");
const { schemas } = require("../../models/contact");
router.get("/", authWrap, controlerWrapper(ctrl.listContacts));
router.get("/:contactId", authWrap, controlerWrapper(ctrl.getContactById));
router.post(
  "/",
  authWrap,
  validBody(schemas.addSchema),
  controlerWrapper(ctrl.addContact)
);
router.delete("/:contactId", authWrap, controlerWrapper(ctrl.removeContact));
router.put(
  "/:contactId",
  authWrap,
  validBody(schemas.addSchema),
  controlerWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  authWrap,
  validBody(schemas.updateFavoriteSchema),
  controlerWrapper(ctrl.updateStatusContact)
);
module.exports = router;
