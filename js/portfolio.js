
var first = $('#first')

function pageLoad() {
    first.setTimeout(function () {
        hide();
    }, 7000, function () {
        first.setTimeout(function () {
            first.show();
        }, 5000)
    })
};

$(document).ready(function () {
    $("body").addClass("loaded");
    pageLoad();
});