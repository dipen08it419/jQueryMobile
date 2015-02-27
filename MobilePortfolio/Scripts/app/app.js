//File: app.js
//Author: Dipen Shah
//Website: http://dipen08it419.github.io/m/index.html
//Description: This file contains javascript code specific to mobile portfolio site of the author.

//dynamically adding same footer on each page when page show event occurs
$('[data-role=page]').on('pageshow', function (event, ui) {
    $("#" + event.target.id).find("[data-role=footer]").html("<span aria-level='1' role='heading' class='ui-title'>© 2015 Dipen Shah. All Rights Reserved.</span><center><a onclick='javascript:window.location=&quot;http://dipen08it419.github.io/#/home?rbm=false&quot;'>visit full site</a></center>");
});

//loading home page projects slider
$(document).ready(function () {
    $('#slider1').tinycarousel();

});

//method to send message using service hosted
function sendMessage() {
    //fetching values from input fields
    var emailId = $("#emailId").val();
    var message = $("#message").val();

    //validating input
    if (emailId && message) {

        //executing ajax call to hosted service
        var data = $.ajax({
            type: 'GET',
            url: 'http://aspspider.info/dipen08it419/ContactService.svc/Contact?emailId=' + emailId + '&message=' + message,
            crossDomain: true,
            dataType: 'jsonp'
        }).success(function (data, status) {
            if (data) {
                alert('Your message sent successfully!');

                //resetting text
                $("#emailId").val("");
                $("#message").val("");

                $("#emailId").focus();
            }

            console.log(data);
        }).error(function (data, status) {
            if (status === 'parsererror') {
                alert('Your message sent successfully!');

                //resetting text
                $("#emailId").val("");
                $("#message").val("");

                $("#emailId").focus();
            } else {
                alert('Sorry! Unable to send message, please try again.');
            }
        });
    } else {
        alert('Please fill up the form.');
    }
}