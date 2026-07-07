const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const contactSchema = require("../schemas/contact.schema");

const ajv = new Ajv({
  allErrors: true
});

addFormats(ajv);

const validateContact = (req, res, next) => {
  const isValid = ajv.validate(contactSchema, req.body);

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: "Contact validation error",
      errors: ajv.errors
    });
  }

  next();
};

module.exports = validateContact;