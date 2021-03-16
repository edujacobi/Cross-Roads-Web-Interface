module.exports = app => {
    const controller = app.controllers.gangs;
  
    app.route('/api/v1/gangs')
      .get(controller.listGangs);

    app.route('/api/v1/getGang')
      .get(controller.getGang);
  }