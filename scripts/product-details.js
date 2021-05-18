$(document).ready(() => {
    var id = getUrlVars()["id"];
    loadProduct(id);
    featuresBtn();
    ProdctSpec();
    standardEquip();
});
function loadProductsDetailsImage(src) {
    var img = $('<img />', {
        class: 'productdetails',
        id: 'product1',
        src: src,
        alt: 'MyAlt'
    });
    img.appendTo($('#product-image-container'));
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

function loadProduct(id) {
    $.getJSON('jsonFiles/products.json', (data) => {
        const product = data.find((product) => product.id === id);
        loadProductDetails(product);
    });

}

function loadProductDetails(productDetails) {
    loadProductsDetailsImage(productDetails.picture);
    $('#page-title').text(productDetails.productName);
    if (productDetails.catchPharse) {
        $('#item-heading').text(productDetails.catchPharse);
    } else {
        $('#catchPhrase').hide();
    }
    $('#tag-line').text(productDetails.tagLine);
    $('#item-content').text(productDetails.catchPharseContent);
    $('#item-price').text("Price: " + productDetails.cost);
    featureAndBenifitDailog(productDetails.featuresAndBenefits)
    productSpecDailog(productDetails.specification)
    standardEquipmentDailog(productDetails.standardEquipment)
}

function featureAndBenifitDailog(featuresAndBenefits) {
    $('#btnShow').click(function () {
        $('#wrapper').html(convertStringArrayToUl(featuresAndBenefits));
        $('#wrapper').dialog({
            modal: true,
            autoOpen: false,
            title: 'FEATURES & BENEFITS',
            width: '450px',
            maxHeight: '600px',
            show: { effect: "fade", duration: 400 },
            hide: { effect: "fade", duration: 400 },
            close: function () {
                removeBtnState();
            }
        });
        $('#wrapper').dialog('open');
        $('button.ui-dialog-titlebar-close').empty().append($('<span>', {
            class: 'ui-button-icon ui-icon ui-icon-closethick'
        }));

    });
}
function productSpecDailog(specifications) {
    $('#btnShow2').click(function () {
        $('#wrapper').html(convertSpecificationToUl(specifications));
        $('#wrapper').dialog({
            modal: true,
            autoOpen: false,
            title: 'PRODUCT SPECS',
            width: '450px',
            maxHeight: '600px',
            show: { effect: "fade", duration: 400 },
            hide: { effect: "fade", duration: 400 },
            close: function () {
                removeBtnState();
            }
        });
        $('#wrapper').dialog('open');
        $('button.ui-dialog-titlebar-close').empty().append($('<span>', {
            class: 'ui-button-icon ui-icon ui-icon-closethick'
        }));

    });
}

function standardEquipmentDailog(standardEquipment) {
    $('#btnShow3').click(function () {
        $('#wrapper').html(convertStringArrayToUl(standardEquipment));
        $('#wrapper').dialog({
            modal: true,
            autoOpen: false,
            title: 'STANDARD EQUIPMENT',
            width: '450px',
            maxHeight: '600px',
            show: { effect: "fade", duration: 400 },
            hide: { effect: "fade", duration: 400 },
            close: function () {
                removeBtnState();
            }
        });
        $('#wrapper').dialog('open');
        $('button.ui-dialog-titlebar-close').empty().append($('<span>', {
            class: 'ui-button-icon ui-icon ui-icon-closethick'
        }));

    });
}

function convertStringArrayToUl(stringArray) {
    var ul = $('<ul>');
    stringArray.map(str => $('<li>', {
        text: str
    })).forEach(element => {
        $(ul).append(element)
    });;
    return ul;
}

function convertSpecificationToUl(stringArray) {
    var ul = $('<ul>');
    stringArray.map(specObj => $('<li>', {
        html: $('<b>', { html: specObj.specType })[0].outerHTML + ':' + $('<span>', { html: specObj.description })[0].outerHTML
    })).forEach(element => {
        $(ul).append(element)
    });;
    return ul;
}

function featuresBtn() {
    $("#btnShow").click(function () {
        removeBtnState();
        $(this).addClass("active");
    });
}

function ProdctSpec() {

    $("#btnShow2").click(function () {
        removeBtnState();
        $(this).addClass("active");
    });
}

function standardEquip() {
    $("#btnShow3").click(function () {
        removeBtnState();
        $(this).addClass("active");
    });
}

function removeBtnState() {
    $("#btnShow,#btnShow2,#btnShow3").removeClass("active");

}
