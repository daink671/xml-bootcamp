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

//this will check if user insert correct price for the movie. 
//i tried to put into app.js but it wasn't working so i added up there
function CheckDecimal(inputtxt) {
    var decimal = /^[-+]?[0-9]+\.[0-9]+$/;//it will check if this input is decimal or not
    if (inputtxt.value.match(decimal)) {//if userinput is decimal, it will work
        return true;
    }
    else {
        alert('Please enter vaild price for this movie. It should be the decimal number EX: 8.00, 7.20')
        return false;//if userinput is not correct, it will not work
    }
}
