$(document).ready(() => {
    console.log('doc is ready');
    $("#tabs").tabs();
    $("#accordion").accordion(
        {
            icons: {
                "header": "ui-icon-plus",
                "activeHeader": "ui-icon-minus"
            }
        });
    $("#menu").menu();
});