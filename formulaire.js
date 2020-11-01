$(function () {

    // Check input
    var $firstName = $('#nom'),
        $lastName = $('#prenom'),
        $nameInput = $('.nameInput'),
        $pseudo = $('#pseudo'),
        $email = $('#email'),
        $password = $('#motDePasse'),
        $passwordConfirm = $('#motDePasseConfirmation'),
        $passwordInput = $('.passwordInput'),
        $reset = $('#reset'),
        $submit = $('#submit');

    $nameInput.keyup(function() {
        if ($(this).val().length < 2) {   // si la chaîne de caract est inférieur à 2
            $(this).css({
                borderColor : 'red',     // le champs devient rouge
                color : 'red'
            });
        } else {
            $(this).css({
                borderColor : 'green',    // si tout est bon c'est vert
                color : 'green'
            });
        };
    });

    $pseudo.keyup(function() {
        if ($(this).val().length < 5) {
            $(this).css({
                borderColor : 'red',
                color : 'red'
            });
        } else {
            $(this).css({
                borderColor : 'green',
                color : 'green'
            });  
        };
    });

    $passwordInput.keyup(function() {
        if ($(this).val().length < 8) {
            $(this).css({
                borderColor : 'red',
                color : 'res'
            });
        } else {
            $(this).css({
                borderColor : 'green',
                color : 'green'
            });
        };
    });

    $passwordConfirm.keyup(function() {
        if ($(this).val() !== $password.val()) {
            $('.alertPassword').css({
                display : 'block',
                color : 'white'
            });
        } else {
            $('.alertPassword').css('display', 'none');
            console.log('Mot de passe ok !');
        }
    });

    // Form Buttons

    // Reset
    $reset.css('background-color', '#d50000');
    $reset.hover(function () {
        $(this).css('background-color', '#ff1744')
    }, function () {
        $(this).css('background-color', '#d50000')
    });

    // Submit
    $submit.css('background-color', '#00C853');
    $submit.hover(function () {
        $(this).css('background-color', '#64DD17')
    }, function () {
        $(this).css('background-color', '#00C853')
    });
});