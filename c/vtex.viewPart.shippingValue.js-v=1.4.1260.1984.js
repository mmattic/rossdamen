/// <reference path="jquery-1.4.1-vsdoc.js"/*tpa=https://consul.vteximg.com.br/Scripts/jquery-1.4.1-vsdoc.js*/ />
/// <reference path="vtex.common.js"/*tpa=https://consul.vteximg.com.br/Scripts/vtex.common.js*/ />
/// <reference path="vtex.jsevents.js"/*tpa=https://consul.vteximg.com.br/Scripts/vtex.jsevents.js*/ />
/// <reference path="vtex.skuEvents.js"/*tpa=https://consul.vteximg.com.br/Scripts/vtex.skuEvents.js*/ />

$(document).ready(function () {
    var shippingValueHrefListener = new Vtex.JSEvents.Listener('shippingValueHrefListener', ShippingValueHref_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, shippingValueHrefListener);
});

function ShippingValue(id) {
    var idSku = $("div#calculoFrete").attr("skuCorrente");

    if (typeof idSku === 'undefined') {
        return false;
    }

    $.ajax({
        type: "GET",
        url: '/frete/' + idSku,
        success: function (dataResult) {
            $("div#calculoFrete").html(dataResult.trim());
            $("div#calculoFrete").show();
        },
        cache: false,
        error: function (xhr, status, error) { alert("Ocorreu um erro! Tente novamente em instantes!"); },
        complete: function () {
            if ($('.freight-zip-box').length > 0 && $('.freight-btn').length > 0) {
                applyCurrentCultureZipCodeMask();
                $('.btn-thickbox').click(function () { $("div#calculoFrete").hide(); });
                shippinOnButtomOkClick();
            }
        }
    });
    return false;
}

function applyCurrentCultureZipCodeMask() {
    var countryCode = $('#StrCountry').val();
    switch (countryCode) {
        case "BRA":
            $(".freight-zip-box").mask("99999-999");
            break;
        case "ARG":
            $(".freight-zip-box").mask("9999");
            break;
        case "CHL":
            $(".freight-zip-box").mask("999-9999");
            break;
        case "USA":
            $(".freight-zip-box").mask("99999");
            break;
        default:
            $(".freight-zip-box").mask("99999-999");
    }
}

function shippinOnButtomOkClick() {
    var idSku = $("div#calculoFrete").attr("skuCorrente");

    $('.freight-btn').click(function () {
        idSku = $("div#calculoFrete").attr("skuCorrente"); //Sku pode ter sido alterado
        var cep = $('.freight-zip-box').val().replace("-", "");
        var quantidade = $('.quantity input[name=quantity]').val();
        if (cep == "") {
            alert($('#CEPObrigatorio').val());
            return false;
        }
        if (cep == "00000000") {
            alert($('#CEPInvalido').val());
            return false;
        }
        if (quantidade == "" || parseInt(quantidade) <= 0) {
            alert($('#ProdutoQuantidadeObrigatorio').val());
            return false;
        }
        var dataToPost = { shippinCep: cep, quantity: quantidade };
        var url = '/frete/calcula/' + idSku;
        ajaxShippin('GET', url, dataToPost, '.freight-values', '');
    });
}

function ajaxShippin(method, url, postData, target, callback) {
    $.ajax({
        type: method,
        url: url,
        data: postData,
        success: function (dataResult) {
            $(target).html(dataResult.trim());
            $(target).show();
        },
        error: function (xhr, status, error) {
            $(target).html(status.trim());
            $(target).show();
        }
    });
}

function ShippingValueHref_OnSkuDataReceived(e) {
    $("div#calculoFrete").attr("skuCorrente", e.skuData.id);
    if (e.skuData.availability == false) {
        $("div#calculoFrete").hide();
    }
    else {
        $("div#calculoFrete").show();
        $('.freight-values').hide();
    }
}
