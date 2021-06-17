$(document).ready(function(){

    $('#regBtn').click(function(){
        location.href = 'admin/reg'
    })

    $('#loginForm').submit(function(event){
        event.preventDefault()

        var loginInput = {
            email: $('#emailId').val(),
            password: $('#passWord').val(),
        }

        $.ajax({
            type: 'POST',
            url: 'api/admin/login',
            data: loginInput,
            success: function(res){
                console.log('SUCCESS')
                console.log(res)
                window.location.href='/task'
            },
            error: function(error){
                $('#errMsg').text("Invalid Credentials")
                console.log(error)
            }
        })
    })
})