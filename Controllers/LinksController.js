import LinkModel from "../Models/LinkModel.js";

const LinksController = {
  add: async (req, res) => {
    const { originalUrl } = req.body;
    try {
      const newLink = await LinkModel.create({ originalUrl });
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getList: async (req, res) => {
    try {
      const links = await LinkModel.find();
      res.json(links);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  redirect: async (req, res) => {
    const { id } = req.params;
    const target = req.query.t; 

    try {
      const link = await LinkModel.findById(id);
      if (!link) return res.status(404).json({ message: "Link not found" });

      // הוספת קליק כולל המקור (target)
      link.clicks.push({ 
          ipAddress: req.ip, 
          targetParamValue: target 
      });
      await link.save();

      res.redirect(link.originalUrl);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
};

export default LinksController;