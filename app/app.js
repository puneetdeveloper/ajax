$(document).ready(function () {
    //app html
    debugger;
    app_html = "";
    app_html += "<div class='container'>";
    app_html += "<div class='page-header'>";
    app_html += "<h1 id='page-title'>Read Product</h1>";
    app_html += "</div>";
    // this is where the contenets will be show
    app_html += "<div id='page-content'></div>";
    app_html += "</div>";
    // inject to 'app' in index.html
    $("#app").html(app_html);

});

// change page title
function changePageTitle(page_title) {
    debugger;
    //change page title 
    $('#page-title').text(page_title);

    //change title tag
    document.title = page_title;

}

//function to make form values to json format
$.fn.serializeObject = function () {

    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        }

        else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};