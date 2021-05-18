$(document).ready(function(){
    $('#taskForm').submit(function(event){
        event.preventDefault()

        var taskInput = {
            description: $('#description').val(),
            completed: $('#status').val(),
            owner: $('#owner').val()
        }
        $.ajax({
            type: 'POST',
            url: '/api/task',
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