const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Contact.findByIdAndRemove({
    _id: req.params.contactId,
    owner,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeContact;
