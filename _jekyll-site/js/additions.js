console.log('hello world');
$('.lightbox-trigger').click(function () {
    console.log("click!");
    var album = $(this).attr("data-album");
    console.log(album);
    var idToClick = "#lightbox-trigger-" + album;
    console.log(idToClick);
    $(idToClick).trigger("click");
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fitImagesInViewport': true,
    'alwaysShowNavOnTouchDevices': true
});