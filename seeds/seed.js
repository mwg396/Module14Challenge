const sequelize = require('../config/connection');
const { User } = require('../models');
const { Blogpost } = require('../models');
const { Comments } = require('../models')
const userData = require('./userData.json');
const blogpost = require('./post.json');
const commentData = require('./Comments.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blogpost.bulkCreate(blogpost, {
    individualHooks: true,
    returning: true,
  });
  await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();