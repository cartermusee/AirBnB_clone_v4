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
});
