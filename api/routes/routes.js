module.exports = (app) => {

const userControllerMethods = require('../controllers/userControllers');
const postControllerMethods = require('../controllers/postControllers');
// create user
app.route('/new-user')
  .post(userControllerMethods.createUser);

app.route('/login')
  .post(userControllerMethods.getUser);

};
