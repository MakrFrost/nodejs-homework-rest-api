const express = require("express");

const { validBody, authWrap } = require("../../middleware");
const { controlerWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");
const auth = require("../../controllers/auth");
const router = express.Router();

router.post(
  "/register",
  validBody(schemas.registerSchema),
  controlerWrapper(auth.register)
);

router.post(
  "/login",
  validBody(schemas.loginSchema),
  controlerWrapper(auth.login)
);

router.get("/current", authWrap, controlerWrapper(auth.getCurrent));

router.get("/logout", authWrap, controlerWrapper(auth.logout));

router.patch(
  "/subscription",
  authWrap,
  validBody(schemas.subscriptionSchema),
  controlerWrapper(auth.updateSubscription)
);

module.exports = router;
