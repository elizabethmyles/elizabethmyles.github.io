{
$(".more").click(function () {
    if ($(this).next(".detail").is(":hidden")) {
        $(this).next(".detail").toggle(750);
        $(this).children('span').text('Hide Additional Works');
    } else {
        $(this).next(".detail").toggle(750);
        $(this).children('span').text('Load Additional Works');
    }
}); 
}
