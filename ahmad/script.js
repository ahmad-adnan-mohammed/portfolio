$(document).ready(function() {
    $('.toggle-details').on('click', function() {
        $(this).siblings('.project-details').slideToggle();
        $(this).text($(this).text() === 'View Details' ? 'Hide Details' : 'View Details');
    });
});
