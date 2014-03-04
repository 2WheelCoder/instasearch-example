(function () {
  var App = window.App = {

    settings: {
      instagram: {
        client_id:"231dba93140b4e17be091ae4016d3223"
      }
    },

    views:{},
    models:{},

    initialize: function appInit () {
      window.alert('App initialized!');

      //if (run) {
        App.homeView = new App.views.Home();
      //}
    }
  };

})();