$(document).ready(function () {
    const amenitiesid = {};
    $("li input[type=checkbox]").change(function () {
            if (this.checked) {
                    amenitiesid[this.dataset.name] = this.dataset.id;
            } else {
                    delete amenitiesid[this.dataset.name];
            }
            $(".amenities h4").text(Object.keys(amenitiesid).sort().join(", "));
    });
    //Ajax

    $.ajax({
        type: "GET",
        url: "ttp://0.0.0.0:5001/api/v1/status/",
        success: function (response) {
            if (response === "OK"){
                $("div#api_status").addClass('available')
            }
            else{
                $("div#api_status").removeClass('available')
            }
        }
    });

    


});
