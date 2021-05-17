$(document).ready(() => {
    console.log('doc is ready');
    $("#tabs").tabs();
    $("#accordion").accordion(
        {
            icons: {
                "header": "ui-icon-plus",
                "activeHeader": "ui-icon-minus"
            },
            heightStyle: "content"
        });
    $("#menu").menu();
    $('#page-container').css('margin-bottom', $('footer').height() + 20 + 'px');
    $('#page-container').css('margin-top', ($('.navbar').height() + 20) + 'px');
});