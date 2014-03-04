(function (App) {

  var HomeView = App.views.Home = Backbone.View.extend({

    el:"#home",

    events: {
      "click #searchButton":"search"
    },

    initialize: function () {
      window.alert('Home view init');
      _.bindAll(this);
    },

    search: function () {
      var tag = this.$el.find('#searchTerm').val();
      App.models.Instagram.find(tag, function (data) {
        new App.views.Thumbnails({thumbnails:data});
      });
    }

  });

})(window.App);