const categoryService = require('../service/category.service');

const getAll = async (_req, res) => {
  const categories = await categoryService.getall();
    return res.status(200).json(categories);
  };

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await categoryService.create({ name });
    return res.status(201).json(newCategory);
};

module.exports = {
getAll,
create,
};