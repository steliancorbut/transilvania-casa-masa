var ContactPage = function () {

    // Return
    return {

      //Basic Map
      initMap: function () {
        var map;
        $(document).ready(function(){
          map = new GMaps({
            div: '#map',
            scrollwheel: false,
            lat: 46.29152,
            lng: 23.70730
          });

          var marker = map.addMarker({
            lat: 46.29152,
            lng: 23.70730,
            title: 'Company, Inc.'
          });
       });
      },
      // End Basic Map

      // Panorama Map
      initPanorama: function () {
        var panorama;
        $(document).ready(function(){
          panorama = GMaps.createPanorama({
            el: '#panorama',
            lat : 46.29152,
            lng : 23.70730
          });
        });
      }
      // End Panorama Map

    };
    // End Return

}();