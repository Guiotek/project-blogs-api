const { BlogPost, User, Category } = require('../models');

const getall = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });
  return posts;
  };
  
  const getOne = async (id) => {
    const post = await BlogPost.findOne({
      include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Category, as: 'categories', attributes: ['id', 'name'] },
      ],
      where: { id },
    });
    return post;
    };
  
  module.exports = {
    getall,
    getOne,
  };