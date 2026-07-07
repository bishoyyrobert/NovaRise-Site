const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const projectSchema = require("../schemas/project.schema");

const ajv = new Ajv({
  allErrors: true
});

addFormats(ajv);

const validateProject = (req, res, next) => {
  const isValid = ajv.validate(projectSchema, req.body);

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: "Project validation error",
      errors: ajv.errors
    });
  }

  next();
};

module.exports = validateProject;