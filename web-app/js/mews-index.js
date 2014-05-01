$(document).ready(function() {
    $.getJSON( "/story/list").done(function(json) {
        console.log(json);
    });
});