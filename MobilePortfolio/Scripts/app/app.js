/// <reference path="../lib/jquery-2.1.3.min.js" />

//File: app.js
//Author: Dipen Shah
//Description: This script contains javascript

$('[data-role=page]').on('pageshow', function (event, ui) {
    $("#" + event.target.id).find("[data-role=footer]").html("<span aria-level='1' role='heading' class='ui-title'>© 2015 Dipen Shah. All Rights Reserved.</span><center><a href='http://dipen08it419.github.io'>visit full site</a></center>");
    //$("#" + event.target.id).find("[data-role=navbar]").navbar();
});

//loading sliders
$(document).ready(function () {
    $('#slider1').tinycarousel();
});

//method to send message using service hosted
function sendMessage() {
    var emailId = $("#emailId").val();
    var message = $("#message").val();

    if (emailId && message) {

        var data = $.ajax({
            type:'GET',
            url: 'http://aspspider.info/dipen08it419/ContactService.svc/Contact?emailId=' + emailId + '&message=' + message,
            crossDomain: true,
            dataType:'jsonp'
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