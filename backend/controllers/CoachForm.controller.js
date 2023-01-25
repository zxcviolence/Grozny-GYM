const CoachForm = require("../models/CoachForm.model");

module.exports.coachFormController = {
  getForm: async (req, res) => {
    try {
      const form = await CoachForm.find();
      res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  postForm: async (req, res) => {
    const { name, phone, weight, isSport } = req.body;
    try {
      const form = await CoachForm.create({
        name,
        phone,
        weight,
        isSport,
      });
      return res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
};
