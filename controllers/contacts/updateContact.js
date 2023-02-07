const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.findByIdAndUpdate(
    {
      _id: req.params.contactId,
      owner,
    },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(201).json(result);
};

module.exports = updateContact;
