$(document).ready(function() {
	console.log("ready")

	creeper.init();
});


var creeper = {

init: function() {
// this.initStyling();
	this.initEvents();

},

initStyling: function() {
	// this.renderYoStuff();
},
initEvents: function(){
	$(".searchspot").click(this.seeYoStuff);
	
},

seeYoStuff: function(){
	console.log("i heard you click the go for it button");
	
	$.ajax({
			type:"GET",
			url: "http://api.pipl.com/search/v3/json/?email=brooke.casey%40gmail.com&phone=8437258318&first_name=Brooke&last_name=Casey&middle_name=Brittany&raw_name=brooke+casey&country=US&state=SC&from_age=25&to_age=30&callback=JSONP&exact_name=0&query_params_mode=and&key=dmw46xb6qfrfr9ncz25rkgth",
			dataType: "jsonp",
			// beforeSend: function(xhr) {
			// xhr.setRequestHeader("X-Mashape-Authorization", "dmw46xb6qfrfr9ncz25rkgth");
			error: function(jqXHR, status, error){
				alert("no! something is wrong" + error);
			},
			success: function (data, datatype, jqXHR){
				console.log("success!");
				// alert(JSON.stringify(data));

				// var person = data;
				// console.log(data);
				
				// var html = '';

				// for (var i = 0; i <person.length; i++){
					
				// html += '<li>' + person.relationships[i].name.display + '</li>';
				// }; 

				// alert("oh man its about to happen");
				// $("#righthere").html(html);
			}
		});
}

}