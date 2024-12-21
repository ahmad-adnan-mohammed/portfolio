$(document).ready(function() {
    $('.toggle-details').on('click', function() {
        $(this).siblings('.project-details').slideToggle();
        $(this).text($(this).text() === 'View Details' ? 'Hide Details' : 'View Details');
    });

    // Function to handle flipping
    function toggleDetails(element) {
        const $details = $(element).siblings('.project-details');
        $details.slideToggle();
        const $toggle = $(element);
        $toggle.text($toggle.text() === 'View Details' ? 'Hide Details' : 'View Details');
    }

    // Event listener for 'click' and 'touchstart'
    $('.toggle-details').on('click touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        toggleDetails(this);
    });
});




$(document).ready(function () {
    $('.flip-card').on('click touchend', function (event) {
        event.preventDefault(); // Prevent any default behavior
        $(this).find('.flip-card-inner').toggleClass('flipped');
    });
});
