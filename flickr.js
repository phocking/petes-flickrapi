

$(document).ready(function(){

    $('form').submit(function(e){
e.preventDefault();
var searchField = $('#searchField');

   
   

    //Ajax code for public Flickr API//
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var all = $(searchField).val();
    var flickrOptions = {
      tags: all,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="li">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a>' +  "<br>" + "<section class='caption'>" + '<a href="' + photo.link + '">'
        + photo.title + "</a>" + " by " + '<a href="' + photo.author + '">' +  photo.author + '</a>' + '<br>'  + " Tags: " + photo.tags  +  "</section>" + '</li>';
                }); 
      photoHTML += '</ul>';
      
      

      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    //End of Ajax code//
    $(searchField).val("");
});
});