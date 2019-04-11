function initialize(){
    var mapOptions={
        zoom:12,
        center:new google.maps.Latlng(40.758904,-73.985128)
    };
    map=new google.maps.Map(document.getElementById('map_canvas'),mapOptions1);
}
google.maps.event.addDomListener(window,'load',initialize);