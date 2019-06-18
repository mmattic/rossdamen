/// <reference path="jquery-1.4.1-vsdoc.js"/*tpa=https://consul.vteximg.com.br/Scripts/jquery-1.4.1-vsdoc.js*/ />
/// <reference path="vtex.common.js"/*tpa=https://consul.vteximg.com.br/Scripts/vtex.common.js*/ />
/// <reference path="vtex.jsevents.js"/*tpa=https://consul.vteximg.com.br/Scripts/vtex.jsevents.js*/ />
/// <reference path="vtex.skuEvents.js"/*tpa=https://consul.vteximg.com.br/Scripts/vtex.skuEvents.js*/ />

$(document).ready(function() {
    var skuReferenceListener = new Vtex.JSEvents.Listener('skuReferenceListener', SkuReference_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, skuReferenceListener);
});

function SkuReference_OnSkuDataReceived(e) {
    if (e.skuData.id > 0) {
        $('.skuReference').html(e.skuData.reference);
        $('.skuReference').attr('style', 'display:inline');
    }
    else {
        $('.skuReference').attr('style', 'display:none');
    }
}