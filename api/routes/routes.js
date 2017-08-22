module.exports = (app) => {

const userControllerMethods = require('../controllers/userControllers');
const postControllerMethods = require('../controllers/postControllers');

app.route('/new-user')
  .post(userControllerMethods.createUser);
};
