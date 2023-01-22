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
    const { name, phone, email, forWhichMassage } = req.body;
    try {
      const form = await Form.create({
        name,
        phone,
        email,
        forWhichMassage,
      });
      return res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
};
