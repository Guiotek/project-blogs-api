const { Category } = require('../models');

const getall = async () => {
  const categories = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return categories;
  };

module.exports = {
getall,
};