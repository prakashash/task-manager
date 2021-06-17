$(document).ready(function(){
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    if ((window.location.pathname).includes('edit')){
        $('#addBtn').hide();
    }else{
        $('#updateBtn').hide();
    }

    $('#taskForm').submit(function(event){
        event.preventDefault()

        var taskInput = {
            description: $('#description').val(),
            completed: $('#status').val(),
            owner: $('#owner').val()
        }
        var apiUrl, method;
        if(!id){
            method ='POST';
            apiUrl = '/api/task'
        }else{
            method ='PUT';
            apiUrl = `/api/task/${id}`
        }
        $.ajax({
            type: method,
            url: apiUrl,
            data: taskInput,
            success: function(res){
                console.log(res)
                window.location.href='/task'
            },
            error: function(error){
                console.log(error)
            }
        })
    })
})