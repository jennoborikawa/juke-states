juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    template: '' +
      '<div ng-controller="AlbumsCtrl" ng-show="showMe">' +
        '<h3>Albums</h3>' +
        '<div class="row">' +
          '<div ng-repeat="album in albums" class="col-xs-4">' +
            '<a class="thumbnail" ng-click="viewAlbum(album.id)" href="#">' +
              '<img ng-src="">' +
              '<div class="caption">' +
                '<h5>' +
                  '<span></span>' +
                '</h5>' +
                '<small> songs</small>' +
              '</div>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>'
  });
});