$(document).ready(function(){

    $('#regForm').submit(function(event){
        event.preventDefault()

        var pswd1 = $('#passWord').val();
        var pswd2 = $('#confirmPswd').val();

        if (pswd1 != pswd2) {
            alert("Password mismatched");
            return;
        }

        var regInput = {
            name: $('#adminName').val(),
            email: $('#emailId').val(),
            password: $('#passWord').val(),
        }

        $.ajax({
            type: 'POST',
            url: '/api/admin',
            data: regInput,
            success: function(res){
                console.log('SUCCESS')
                console.log(res)
                window.location.href='/'
            },
            error: function(error){
                $('#errMsg').text("Invalid Credentials")
                console.log(error)
            }
        })
    })
})