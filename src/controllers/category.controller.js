const categoryService = require('../service/category.service');

const getAll = async (_req, res) => {
  const categories = await categoryService.getall();
    return res.status(200).json(categories);
  };

module.exports = {
getAll,
};