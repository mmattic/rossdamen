
$(document).ready(function() {
    var otherPaymentMethodListener = new Vtex.JSEvents.Listener('otherPaymentMethodListener', otherPaymentMethod_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, otherPaymentMethodListener);
});

function otherPaymentMethod_OnSkuDataReceived(e) {
    var id = e.skuData.id;

    if (id > 0) {
        $.ajax({
            type: "GET",
            url: '/outrasformasparcelamento/' + id,
            dataType: 'html',
            success: function(data) {
                $('.other-payment-method-content').html(data);
            },
            error: function() {
                $('.other-payment-method-content').html("<font color='red'>erro ao buscar o other-payment-method</font> <!-- Erro na view part otherPaymentMethod -->");
            }
        });

    }
    else {
        $('.other-payment-method-content').html('<!-- Não possui nenhum other-payment-method para esse Sku ' + id + ' -->');
    }
}

     