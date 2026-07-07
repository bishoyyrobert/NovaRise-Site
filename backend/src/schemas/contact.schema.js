const contactSchema = {
  type: "object",

  required: ["name", "email", "message"],

  additionalProperties: false,

  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 50
    },

    email: {
      type: "string",
      format: "email"
    },

    phone: {
      type: "string",
      minLength: 10,
      maxLength: 15
    },

    message: {
      type: "string",
      minLength: 10,
      maxLength: 1000
    }
  }
};

module.exports = contactSchema;