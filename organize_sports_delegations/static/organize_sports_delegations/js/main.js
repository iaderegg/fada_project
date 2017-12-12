$(document).ready(function(){
    $('#button_send_file').on('click', function(){
        var file_to_process = $('#input_file').val()
        var token = $("input[name=csrfmiddlewaretoken]").val()
        process_file(file_to_process, token)
    })
})

function process_file(file_to_process, token){

    $.ajax({
        url: '/organize_delegations/server_processing/',
        data: {'file': file_to_process, 'csrfmiddlewaretoken': token},
        dataType: 'json',
        type: 'POST',
        success: function(data){
            console.log(data)
        },
        error: function(data){
            console.log('Error al procesar')
            console.log(data)
        },
        async: false

    })

}