/// <reference path="../lib/jquery-2.1.3.min.js" />

//File: app.js
//Author: Dipen Shah
//Description: This script contains javascript

$('[data-role=page]').on('pageshow', function (event, ui) {
    $("#" + event.target.id).find("[data-role=footer]").html("<span aria-level='1' role='heading' class='ui-title'>© 2015 Dipen Shah. All Rights Reserved.</span><center><a href='http://dipen08it419.github.io'>visit full site</a></center>");
    //$("#" + event.target.id).find("[data-role=navbar]").navbar();
});