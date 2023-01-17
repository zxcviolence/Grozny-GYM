const News = require("../models/News.model");

module.exports.newsController = {
  createNews: async (req, res) => {
    const { title, subtitle, category, image } = req.body;
    try {
      const news = await News.create({ title, subtitle, category, image });
      return res.status(201).json(news);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  getNews: async (req, res) => {
    try {
      const news = await News.find().populate("category");
      return res.json(news);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndRemove(req.params.id);
      return res.json("Новость удалена");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  patchNews: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          subtitle: req.body.subtitle,
          category: req.body.category,
          image: req.body.image,
        },
        { new: true }
      );
      return res.json(`Новость изменена на ${news.title}`);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
