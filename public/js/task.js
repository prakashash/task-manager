$(document).ready(function(){
    $("#addBtn").click(function(){
        window.location.href='/task/add'
    })

    $("#deleteBtn").click(function() {
        var cnt = $('input[type=checkbox]:checked').length
        if(!cnt || cnt > 1){
            alert("Please select only one box")
            return;
        }
        
        var check = confirm("Please confirm");

        if (check){
            var all = $('input:checked');
            var checked = all.filter(':checked');
            var checkedId = checked.map(function(){
                return this.id
            })

            $.ajax({
                type: 'DELETE',
                url: `/api/task/${checkedId[0]}`,
                success: function(res){
                    console.log(res)
                    window.location.href='/task'
                },
                error: function(error){
                    console.log(error)
                }
            })
        }
   });

   $('#resetBtn').click(function(){
       location.href = '/admin/reset'
   })   

   $('#editBtn').click(function(){
        var cnt = $('input[type=checkbox]:checked').length
        if(!cnt || cnt > 1){
            alert("Please select only one box")
            return;
        }
        var all = $('input:checked');
        var checked = all.filter(':checked');
        var checkedId = checked.map(function(){
            return this.id
        })
        window.location.href = `/task/edit/${checkedId[0]}`;
    })

    $('#searchBtn').click(function(){
        var searchInp = $('#searchField').val()
        if(searchInp == ''){
            alert('Please enter something')
            location.href = '/task'
            return
        }
        location.href = `/task?description=${searchInp}`;
    })
    $('#logoutBtn').click(function(){
        $.ajax({
            type: 'GET',
            url: '/api/admin/logout',
            success: function(res){
                console.log("Success");
                location.href = '/';
            },
            error: function(error){
                console.log(error)
            }
        })
    })

})