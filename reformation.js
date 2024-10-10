$(document).ready(function() {
    function adjustElements() {
        var windowWidth = $(window).width();

        if (windowWidth < 600) {
            // Actions for small screens
            $('.your-element').css({
                'font-size': '12px',
                'padding': '10px'
            });
        } else {
            // Actions for larger screens
            $('.your-element').css({
                'font-size': '16px',
                'padding': '20px'
            });
        }
    }

    // Call the function on load and resize
    adjustElements();
    $(window).resize(function() {
        adjustElements();
    });
});

$(document).ready(function() {
    $('#menu-toggle').click(function() {
        $('.navigation').toggleClass('active');
    });

    $(window).resize(function() {
        // Close the menu if the window is resized to a larger size
        if ($(window).width() > 600) {
            $('.navigation').removeClass('active');
        }
    });
});

$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() < 600) {
            $('body').addClass('mobile-view');
        } else {
            $('body').removeClass('mobile-view');
        }
    }

    checkScreenSize();
    $(window).resize(function() {
        checkScreenSize();
    });
});

$(document).ready(function() {
    $('img').css('max-width', '100%').css('height', 'auto');
});