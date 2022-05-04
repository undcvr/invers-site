document.body.onload = function() {
    setTimeout(() => {
        $('.large-block').css('left', '-300px')
        $('.med-block').css('right', '-400px')
        setTimeout(() => {
            $('.small-block').css('bottom', '25%');
            $('.title').css('opacity', '1');
        }, 350)
    }, 50);
}