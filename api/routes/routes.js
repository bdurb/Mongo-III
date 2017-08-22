module.exports = (app) => {

const postControllerMethods = require('../controllers/postControllers')
const userControllerMethods = require('../controllers/userControllers')

app.route('/new-user')
  .post(userControllerMethods.createUser)

app.route('')
};
