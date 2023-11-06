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

    //fetch
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:5001/api/v1/places_search/",
        data: JSON.stringify({}),
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            data.forEach((place)=>
                $("section.places").append(
                    `<article>
            <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
            <div class="max_guest">${place.max_guest} Guest${
                        place.max_guest !== 1 ? "s" : ""
                    }</div>
            <div class="number_rooms">${place.number_rooms} Bedroom${
                        place.number_rooms !== 1 ? "s" : ""
                    }</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${
                        place.number_bathrooms !== 1 ? "s" : ""
                    }</div>
            </div> 
            <div class="description">
            ${place.description}
            </div>
                </article>`
                )
            );
        }
    });

    $(".filters button").bind("click", searchPlace);
	searchPlace();

});
