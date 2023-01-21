const Form = require("../models/Form.model");

module.exports.formController = {
  getForm: async (req, res) => {
    try {
      const form = await Form.find();
      res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  postForm: async (req, res) => {
    const { name, phone, email } = req.body;
    try {
      const form = await Form.create({
        name,
        phone,
        email,
      });
      return res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
};
