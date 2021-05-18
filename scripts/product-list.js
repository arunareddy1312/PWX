$(document).ready(() => {
    var queryParam = getUrlVars();
    var key = queryParam[queryParam[0]];

    $.getJSON('jsonFiles/productTypeDetails.json', (data) => {
        $('#page-title').text(data.productTypeDetails[key].headerTitle.toUpperCase());
        createMenuItems(data.productTypeDetails[key].menuItems);

    })
    $('[data-key='+key+']').addClass('active-nav');

});

function createMenuItems(items) {
    $('#sub-category-menu').append(items.map(menuItem => $("<li>").append($("<div>").html(menuItem))));
    $('#sub-category-menu').menu();
    $('#sub-category-menu li .ui-menu-item-wrapper').on('click', (event) => {
        $.getJSON('jsonFiles/products.json', (data) => {
            loadProducts(data, $(event.target).text());
            $('#sub-category-menu li').removeClass('menu-active');
            $(event.target).parent().addClass('menu-active');
        });
    });
    $('#sub-category-menu li:first-child>div').click();
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

function loadProducts(productsArray, subCategory) {
    $('#product-list-container').empty();
    productsArray = productsArray || [];
    productsArray.filter((product) => product.subCategory === subCategory)
        .forEach(function (value, index, array) {
            $('#product-list-container').append($('<div>', {
                class: 'col-md-3',
                html: createBootStrapPanel(value.picture, value.productName.toUpperCase(), value.id)
            }))
        })
}

function createBootStrapPanel(imageSrc, productName, id) {
    var defaultPanel = $('<div>', {
        class: 'panel panel-default'
    }).append($('<div>', {
        class: 'panel-heading'
    }).append($('<h3>', {
        class: 'panel-title',
        text: productName
    }))).append($('<div>', {
        class: 'panel-body',
        html: $('<img>', {
            'src': imageSrc,
            width: '100%',
            height: '200px'
        })
    }).css('max-height', '250px')).append($('<div>', {
        class: 'panel-footer'
    }).append($("<a>", {
        role: 'button',
        class: 'btn btn-primary btn-lg btn-block',
        href: 'product-details.html?id=' + id,
        text: 'View Details'
    })))
    return defaultPanel;
}
