const projectSchema = {
  type: "object",

  required: ["title", "client", "category", "description", "image"],

  additionalProperties: false,

  properties: {
    title: {
      type: "string",
      minLength: 3,
      maxLength: 100
    },

    client: {
      type: "string",
      minLength: 2,
      maxLength: 100
    },

    category: {
      type: "string",
      minLength: 2,
      maxLength: 50
    },

    description: {
      type: "string",
      minLength: 10,
      maxLength: 1000
    },

    image: {
      type: "string",
      minLength: 3
    }
  }
};

module.exports = projectSchema;