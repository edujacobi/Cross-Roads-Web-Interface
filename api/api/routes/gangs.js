module.exports = app => {
  const controller = app.controllers.gangs;

  app.route('/api/v1/listGangs')
    .get(controller.listGangs);

  app.route('/api/v1/getGang')
    .get(controller.getGang);

  app.route('/api/v1/getGangByUserId')
    .get(controller.getGangByUserId);
}