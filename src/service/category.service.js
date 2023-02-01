const { Category } = require('../models');

const getall = async () => {
  const categories = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return categories;
};

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
getall,
create,
};