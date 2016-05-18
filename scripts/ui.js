$(document).ready(function() {
  $('#advanced-search').click(function() {
    $('#advanced-search-pane').slideToggle(300);
  });

  $('#hide-images').click(function() {
    $('.image-gallery').toggle(300);
  });

});
