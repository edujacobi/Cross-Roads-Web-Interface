module.exports = app => {
  const controller = app.controllers.users;

  app.route('/api/v1/listUsers')
    .get(controller.listUsers);

  app.route('/api/v1/getUserById')
    .get(controller.getUserById);

  app.route('/api/v1/getUserUsernameById')
    .get(controller.getUserUsernameById);

  app.route('/api/v1/getUserListGang')
    .get(controller.getUserListGang);
}