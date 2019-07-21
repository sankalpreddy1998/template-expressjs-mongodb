
  $(function(){
   $('#get_data').on('click',function(){
    $.ajax({
       url:'/data',
       contentType:'application/json',
       success:function(response){
             var tbodyEle = $('#table_content');
             tbodyEle.html(''); //to empty html:just to be sure
             response.data.forEach(function(data){
               tbodyEle.append('\
               <tr>\
                 <td class="id">' + data._id + '</td>\
                 <td><input type="text" class="task_c" value="'+ data.task +'"</td>\
                 <td>\
                   <button class="update_button">edit</button>\
                   <button class="delete_button">delete</button>\
                 </td>\
               </tr>\
               ');
             });
             $('.id').hide();
           }
     });
   });

   $('#post_data').on('click', function(event) {
        event.preventDefault();

        var input_field = $('#input_field');

        $.ajax({
            url: '/',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ task: input_field.val() }),
            success: function(response) {
                console.log(response);
                input_field.val('');
                $('#get_data').click();
            }
        });
    });

    $('table').on('click', '.update_button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newTask = rowEl.find('.task_c').val();

        $.ajax({
            url: '/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ task: newTask }),
            success: function(response) {
                console.log(response);
                $('#get_data').click();
            }
        });
    });

    $('table').on('click', '.delete_button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();

        $.ajax({
            url: '/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#get_data').click();
            }
        });
    });



 });
