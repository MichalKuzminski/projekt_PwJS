var portfolioApp = angular.module('portfolioApp',[]); 
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.title = "Oferta";

    $scope.galleries = [
        
    { 'title':'Mercedes klasy B',
     'when':'2014-08-04',
     'price':'110000',
     'thumbnailUrl':'img/bklasa.jpg'
    },
    { 'title':'Mercedes klasy C',
    'when':'2016-07-19',
    'price':'132000',
    'thumbnailUrl':'img/cklasa.jpg'
   },
   { 'title':'Mercedes klasy A',
     'when':'2015-12-14',
     'price':'100000',
     'thumbnailUrl':'img/aklasa.jpg'
    },
   { 'title':'Mercedes klasy E',
   'when':'2016-01-25',
   'price':'190000',
   'thumbnailUrl':'img/eklasa.jpg'
  },
  { 'title':'Mercedes klasy G',
  'when':'2014-05-11',
  'price':'500000',
  'thumbnailUrl':'img/gklasa.jpg'
 },
 { 'title':'Mercedes klasy S',
 'when':'2017-11-03',
 'price':'420000',
 'thumbnailUrl':'img/sklasa.jpg'
}
   
    ];
    $scope.sortList = [
        {
        'label':'Alfabetycznie',
        'value':'title'
        },
            {
                'label':'Od najdroższego',
                'value':'-price'
                },
                {
                    'label':'Cena w górę',
                    'value':'price'
                    }
        ]; 
        $scope.orderProp = $scope.sortList[0];
    });
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000 );
      }
    }
  });
