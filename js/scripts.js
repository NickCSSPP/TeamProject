$(document).ready(function() {
    $(".enlarge-image").click(function() {
      var imageSrc = $(this).attr("src");
      var enlargedImage = $("<div class='enlarged-image-overlay'><img src='" + imageSrc + "'></div>");
      $("body").append(enlargedImage);
      enlargedImage.click(function() {
        $(this).remove();
      });
    });
  });