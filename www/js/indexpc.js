             $(document).on('pagecreate', '#pageone', function(){
    if(sessionStorage.getItem("logged_in")=="1"){
        $.mobile.changePage("twopc.html", { transition: "none", changeHash: true, reverse: false });
    }
$(document).off('click', '#submit').on('click', '#submit', function() {
    if($('#username').val().length > 0 && $('#password').val().length > 0){
        console.log($('#check').serialize());
        $.ajax({url: 'http://schoolapp.co.in/pc/slimrestapi-dev-test/login.php',
            data:$('#check').serialize(),
            type: 'post',
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
$('body').addClass('ui-loading');
},
complete: function() {
},
success: function (result) {
    console.log(result);
    if(result[0]){
        sessionStorage.setItem("logged_in","1");
        sessionStorage.setItem("user_data",JSON.stringify(result[1]));
        sessionStorage.setItem("plant_data",JSON.stringify(result[2]));
        sessionStorage.setItem("category_data",JSON.stringify(result[3]));
        sessionStorage.setItem("activity_data",JSON.stringify(result[4]));
        $.mobile.loading().hide();
        $.mobile.changePage("twopc.html", { transition: "none", changeHash: true, reverse: false });
    }else {
        $.mobile.loading().hide();
        alert("username or password entered is invalid");
    }
    return false;
},
error: function (request,error) {
    console.log(error);
    console.log(request);
alert('Network error has occurred please try again!');
}
});
} else {
    alert('Please fill all necessary fields');
}
return false;
});
$(document).off('click', '#forgot_btn').on('click', '#forgot_btn', function() { // catch the form's submit event
    if($('#username1').val().length > 0 && $('#contactnumber').val().length > 0 && $('#information').val().length > 0){
        console.log($('#forgot').serialize());
        $.ajax({url: 'http://staging.eimpressive.com/test/pc/slimrestapi-dev-test/index2.php',
            data:$('#forgot').serialize(),
            type: 'post',
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
                $('body').addClass('ui-loading');
            },
            complete: function() {
$.mobile.loading().hide();
},
success: function (result) {
    if(result[0]){
        alert('details submitted successfully');
        $("#forgot").trigger('reset');
        $('#popupLogin').popup('close');
    }else {
        alert('incorrect details provided');
    }
    return false;
},
error: function (request,error) {
    console.log(error);
    console.log(request);
    alert('Network error has occurred please try again!');
}
});                  
    } else {
        alert('Please fill all necessary fields');
    }           
return false;
});    
});