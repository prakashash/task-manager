$(document).ready(function () {
    $('#resetForm').submit(function (event) {
        event.preventDefault()


        var pswd1 = $('#newPswd').val();
        var pswd2 = $('#confirmPswd').val();

        if (pswd1 != pswd2) {
            alert("Password mismatched");
            return;
        }

        var resetInput = {
            email: $('#emailId').val(),
            oldPswd: $('#oldPswd').val(),
            password: $('#newPswd').val()
        }

        $.ajax({
            type: 'POST',
            url: '/api/admin/reset',
            data: resetInput,
            success: function (res) {
                console.log('SUCCESS')
                console.log(res)
                window.location.href = '/'
            },
            error: function (error) {
                $('#errMsg').text("Invalid Credentials")
                console.log(error)
            }
        })
    })

})
