$(document).ready(() => {
    var queryParam = getUrlVars();
    var key = queryParam[queryParam[0]];
    $.getJSON('jsonFiles/productTypeDetails.json', (data) => {
        $('#page-title').text(data.productTypeDetails[key].headerTitle.toUpperCase());
        createMenuItems(data.productTypeDetails[key].menuItems);
    })
});

function createMenuItems(items) {
    $('#sub-category-menu').append(items.map(menuItem => $("<li>").append($("<div>").html(menuItem))));
    $('#sub-category-menu').menu();
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}