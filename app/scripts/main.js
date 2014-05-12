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
			url: "http://api.pipl.com/search/v3/json/?email=brooke.casey%40gmail.com&phone=8437258318&first_name=Brooke&last_name=Casey&middle_name=Brittany&raw_name=brooke+casey&country=US&state=SC&from_age=25&to_age=30&callback=JSONP&exact_name=0&query_params_mode=and&key=d24xragg5n8recdnvvdffatc",
			dataType: "jsonp",
			data: $('myForm').serialize(),	// {email: $("#emailholder").val()}

			error: function(jqXHR, status, error){
				alert("no! something is wrong" + error);
			},
			success: function (data, datatype, jqXHR){
				console.log("success!");

				var records = data.records;
				console.log(records);
				var html = '';

				for (var i = 0; i <records.length; i++){

				html += '<li>' + records[i].source.domain + '</li>\n';
				};
				$(".righthere").append(html);	
			}

	});

}

}
