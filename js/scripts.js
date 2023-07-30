$(document).ready(function() {
  const bodyElement = $("body");
  const galleryElement = $(".gallery");

  galleryElement.on("mouseenter", ".enlarge-image", function() {
    bodyElement.addClass("no-background");
  });

  galleryElement.on("mouseleave", ".enlarge-image", function() {
    bodyElement.removeClass("no-background");
  });

  galleryElement.on("click", ".enlarge-image", function() {
    var imageSrc = $(this).attr("src");
    var enlargedImage = $("<div class='enlarged-image-overlay'><img src='" + imageSrc + "'></div>");
    $("body").append(enlargedImage);

    enlargedImage.click(function() {
      $(this).remove();
      bodyElement.removeClass("no-background"); // Restore background on image click
    });
  });
});
