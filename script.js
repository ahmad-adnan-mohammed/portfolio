$(document).ready(function () {
    $('.flip-card').on('click touchend', function (event) {
        event.preventDefault(); // Prevent any default behavior
        $(this).find('.flip-card-inner').toggleClass('flipped');
    });
});
