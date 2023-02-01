const postService = require('../service/post.service'); 

const getAll = async (_req, res) => {
  const posts = await postService.getall();
    return res.status(200).json(posts);
  };
  
const getOne = async (req, res) => {
  const { id } = req.params; 
  const post = await postService.getOne(id);
  if (!post) {
    return res.status(404).json({ message: 'User does not exist' });
  }
    return res.status(200).json(post);
  };

module.exports = {
    getAll,
    getOne,
    };