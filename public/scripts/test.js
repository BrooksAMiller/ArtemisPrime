
$(document).ready(function(){
    $.ajax({
        url:'/public/scripts/dataBaseConnection.php',
        type:'get',
        dataType: 'JSON',
        success: function(response){
            console.log("connect success");
            alert(response);
            var len = response.length;
            for(var i = 0; i < len; i++){
                var id = response[i].id;
                var list_header = response[i].list_header;
                var test = "<h2>" + id + list_header + "</h2>";
                $(".display-property-container").append(test);
            }
        }
    });
});

/*
fetch('./test.php')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        alert('Hello' + data);
    });
*/

