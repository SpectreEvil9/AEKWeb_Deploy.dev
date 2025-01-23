function checkValidateForm() {
    var inputText = $('.validate-input .input-req');
    var inputDate = $('.validate-input .input-req-date');
    var inputSelect = $('.validate-input .input-req-select');
    var check = true;

    for (var i = 0; i < inputText.length; i++) {
        if (validate(inputText[i]) == false) {
            showValidate(inputText[i]);
            check = false;
        }
    }

    for (var i = 0; i < inputDate.length; i++) {
        if (validate(inputDate[i]) == false) {
            showValidateDate(inputDate[i]);
            check = false;
        }
    }

    for (var i = 0; i < inputSelect.length; i++) {
        if (validate(inputSelect[i]) == false) {
            showValidateDate(inputSelect[i]);
            check = false;
        }
    }
    return check;
}

function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }
    else {
        if ($(input).val() == null) {
            return false;
        }
        if ($(input).val().trim() == '') {
            return false;
        }
    }
}

function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}

function showValidateDate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate-date');
}

function hideValidateDate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate-date');
}

function showvalid(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-valid');
}

function hidevalid(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-valid');
}

function showvalidSelect(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-valid-select');
}

function hidevalidSelect(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-valid-select');
}
