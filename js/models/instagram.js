(function (App) {

  var InstagramModel = App.models.Instagram = Backbone.Model.extend({},{

    find: function (tag, callback) {
      var url = 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id='+App.settings.instagram.client_id;
      $.getJSON(url, callback);
    }

  });

})(window.App);