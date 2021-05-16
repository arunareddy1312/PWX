$(document).ready(() => {
    $("#alertMessage").hide();
    initiateBootstrapvalidator();
    onSubmit();
});
function initiateBootstrapvalidator() {

    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fname: {
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Your first name cannot be less than 2 characters'
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            lname: {
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Your last name cannot be less than 2 characters'
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter valid Email ID'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country'
                    }
                }
            },
            formControlTextarea1: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message: 'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                }
            }
        }

    });
}
function onSubmit() {

    $('#submit-btn').click((e) => {
        var validator = $('#contact_form').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
            $("#alertMessage").show().fadeOut(5000);
            resetForm();
        }
    });
}
function resetForm() {
    $('#contact_form').get(0).reset();
    var validator = $('#contact_form').data('bootstrapValidator');
    validator.resetForm();
}