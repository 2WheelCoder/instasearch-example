(function (App) {

  var ThumbnailsView = App.views.Thumbnails = Backbone.View.extend({

    el:'body',

    initialize: function (options) {
      this.thumbnails = options.thumbnails;
      _.bindAll(this);
      this.render();
      var self = this;
      
      this.$el.hammer().on('swiperight', '#thumbList', function (event) {
        console.log('swiperight', event);
        $('#thumbList').remove();
      });

      this.$el.hammer().on('swipedown', '#thumbList', function (event) {
        console.log('swipedown', event);
        
        if (!event.currentTarget.scrollTop) {
          var tag = App.homeView.$el.find('#searchTerm').val();
          App.models.Instagram.find(tag, function (data) {
            self.thumbnails = data;
            self.render();
          });
        }
      });
    },

    render: function () {
      console.log(this.thumbnails);
      var self = this;
      var html = '<div id="thumbList" class="panel slideInLeft"><ol>';
      var imgDeffereds = [];
      this.thumbnails.data.forEach(function (post) {
        var img = new Image();
        var imgDeffered = $.Deferred();
        img.onload = imgDeffered.resolve;
        img.src = post.images.low_resolution.url;
        
        imgDeffereds.push(imgDeffered);

        html += '<li><img src="'+post.images.low_resolution.url+'" /></li>';
      }); 
      html += '</ol></div>';
      
      $.when.apply(imgDeffereds, $).then(function () {
        self.$el.delay(1000).append(html);
      });
    }

  });

})(window.App);