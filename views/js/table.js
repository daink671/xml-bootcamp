function draw_table() {
    $("#results").empty();
    $.getJSONuncached = function (url) {
        return $.ajax(
            {
                url: url,
                type: 'GET',
                cache: false,
                success: function (html) {
                    $("#results").append(html);
                    select_row();
                }
            });
    };
    $.getJSONuncached("/get/html")
};

function select_row() {
    $("#menuTable tbody tr[id]").click(function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
        var movie = $(this).attr("id") - 1;
        delete_row(section, movie);
    })
};

function delete_row(sec, ent) {
    $("#delete").click(function () {
        $.ajax(
            {
                url: "/post/delete",
                type: "POST",
                data:
                {
                    section: sec,
                    movie: ent
                },
                cache: false,
                success: setTimeout(draw_table, 1000)
            })
    })
};

$(document).ready(function () {
    draw_table();
});

function CheckDecimal(inputtxt) {
    var decimal = /^[-+]?[0-9]+\.[0-9]+$/;
    if (inputtxt.value.match(decimal)) {
        return true;
    }
    else {
        alert('Please enter vaild price for this movie')
        return false;
    }
} 