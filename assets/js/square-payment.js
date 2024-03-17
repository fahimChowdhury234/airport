function onGetCardNonce(event) {
    event.preventDefault();
    paymentForm.requestCardNonce();
}

const verificationDetails = { 
    intent: 'CHARGE', 
    amount: journeyFare, 
    currencyCode: currencyCode, 
    billingContact: {
        givenName: '',
        familyName: ''
    }
};    

var paymentForm = new SqPaymentForm({
    applicationId: applicationId,
    locationId: locationId,
    inputClass: 'sq-input',
    inputStyles: [{
        backgroundColor: 'transparent',
        color: '#333333',
        fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        placeholderColor: '#8594A7',
        placeholderFontWeight: '400',
        padding: '16px',
        _webkitFontSmoothing: 'antialiased',
        _mozOsxFontSmoothing: 'grayscale'
    }],
    googlePay: {
        elementId: 'sq-google-pay'
    },
    applePay: {
        elementId: 'sq-apple-pay'
    },
    masterpass: {
        elementId: 'sq-masterpass'
    },
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: '•••• •••• •••• ••••'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code'
    },
    callbacks: {
        methodsSupported: function (methods, unsupportedReason) {
            if (!methods.masterpass && !methods.applePay && !methods.googlePay) {
                var walletBox = document.getElementById('sq-walletbox');
                walletBox.style.display = 'none';
            } else {
                var walletBox = document.getElementById('sq-walletbox');
                walletBox.style.display = 'block';
            }
            if (methods.googlePay === true) {
                var googlePayBtn = document.getElementById('sq-google-pay');
                googlePayBtn.style.display = 'inline-block';
            }
            if (methods.applePay === true) {
                var applePayBtn = document.getElementById('sq-apple-pay');
                applePayBtn.style.display = 'inline-block';
            }
            else {
                // console.log(unsupportedReason);
            }
            if (methods.masterpass === true) {
                var masterpassBtn = document.getElementById('sq-masterpass');
                masterpassBtn.style.display = 'inline-block';
            }
        },
        createPaymentRequest: function () {
            var paymentRequestJson = {
                requestShippingAddress: false,
                requestBillingInfo: true,
                currencyCode: "<?=$currencyCode;?>",
                total: {
                    label: "Total",
                    amount: journeyFare,
                    pending: false
                },
                lineItems: [
                    {
                    label: "Subtotal",
                    amount: journeyFare,
                    pending: false
                    }
                ]
            };
            return paymentRequestJson;
        },
        validateShippingContact: function (contact) {
            var validationErrorObj ;
            return validationErrorObj ;
        },
        cardNonceResponseReceived: function(errors, nonce, cardData, billingContact, shippingContact) {
            if (errors) {
                var error_html = "";
                for (var i =0; i < errors.length; i++){
                    error_html += "<li> " + errors[i].message + " </li>";
                }
            document.getElementById("error").innerHTML = error_html;
            document.getElementById('sq-creditcard').disabled = false;
            return;
            }else{
                document.getElementById("error").innerHTML = "";
            }
            document.getElementById('card-nonce').value = nonce;
            paymentForm.verifyBuyer(nonce, verificationDetails, function callback(err,verification) {
                if (err == null) {
                    document.getElementById('verification-token').value = verification.token;
                    document.getElementById('nonce-form').submit();
                }
            });
        },
        unsupportedBrowserDetected: function() {
        },
        inputEventReceived: function(inputEvent) {
            switch (inputEvent.eventType) {
            case 'focusClassAdded':
                
                break;
            case 'focusClassRemoved':
                
                break;
            case 'errorClassAdded':
                
                break;
            case 'errorClassRemoved':
                
                break;
            case 'cardBrandChanged':
                
                break;
            case 'postalCodeChanged':
                
                break;
            }
        },
        paymentFormLoaded: function() {

        }
    }
});