$(function() {
    $('a.page-link').on('click', function() {
        $('a.page-link').removeClass('active');
        $(this).addClass('active');
    });
});

function toggle_interest(obj) {
    if($(obj).hasClass('interest-on')) {
        $(obj).next().removeClass('hide');
        $(obj).addClass('hide');
    }
    else {
        $(obj).prev().removeClass('hide');
        $(obj).addClass('hide');
    }
}