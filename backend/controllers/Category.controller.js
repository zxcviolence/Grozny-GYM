const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const category = await Category.create({ name });
      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  getCats: async (req, res) => {
    try {
      const category = await Category.find();
      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  removeCats: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      return res.status(201).json("Категория удалена");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  updateCats: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
        },
        { new: true }
      );
      return res.json(`Категория изменена на ${category.name}`);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
