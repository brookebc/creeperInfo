$(document).ready(function() {
	console.log("ready");

	creeper.init();
});


var creeper = {

init: function() {
	// this.initStyling();
	this.initEvents();

},

initStyling: function() {
	// this.seeYoStuff();
},
initEvents: function(){
	$(".userdataform").on("submit", this.makeSearchUri);
	// $(".userdataform").on("submit", this.seeYoStuff);
	$(".sources").on("click", this.seeSources);
	
},

makeSearchUri: function(event){
	event.preventDefault();

	var first = $('.first').val();
	console.log(first);

	var middle = $('.middle').val();
	console.log(middle);

	var last = $('.last').val();
	console.log(last);

	var rawname = 'first' + 'last'
	console.log(rawname);

	var email = $('.email').val();
	var readyemail =  encodeURIComponent(email);
	console.log(readyemail);

	var phone = $('.phone').val();
	console.log(phone);

	var city = $('.city').val();
	console.log(city);

	var state = $('.state').val();
	console.log(state);

	var country = $('.country').val();
	console.log(country);

	var key = "dmw46xb6qfrfr9ncz25rkgth";

var readyurl = "http://api.pipl.com/search/v3/json/?" + "&email_name=" + readyemail + "&phone=" + phone + "&first_name=" + first + "&last_name=" + last + "&middle_name=" + middle + "&country=" + country + "&state=" + state + "&callback=JSONP&query_params_mode=and&key=" + key;
console.log(readyurl);
alert(readyurl);
getinfo(readyurl);

function getinfo(){

	$.ajax({
			type:"GET",
			url: readyurl,
			dataType: "jsonp",
			error: function(jqXHR, status, error){
				alert("no! something is wrong" + error);
				console.log(error);
			},
			success: function (data, datatype, jqXHR){
				console.log("success!");

				var peopleinfo = data.person;
				console.log(peopleinfo);

				var html = '';

				for (var i = 0; i <peopleinfo.addresses.length; i++){

				html += '<li>' + peopleinfo.addresses[i].display + '</li>';
				};
				console.log(html);

				$(".righthere").html(html);	
			}
		});

	}
},

seeSources: function(event){
	event.preventDefault();

	console.log("so you wanna see my sources");
	$(".sources").append("Just a sec. Let me get it organized for you");

	$.ajax({
				type:"GET",
				url: "http://api.pipl.com/search/v3/json/?email=brooke.casey%40gmail.com&phone=8437258318&first_name=Brooke&last_name=Casey&middle_name=Brittany&raw_name=brooke+casey&country=US&state=SC&from_age=25&to_age=30&callback=JSONP&exact_name=0&query_params_mode=and&key=d24xragg5n8recdnvvdffatc",
				dataType: "jsonp",
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

	 				console.log(html);
	 				$(".sourceshere").html(html);	
	 			}
			});

	}

}

// mapYoSelf: function(){
// 	console.log("i heard you click the go for it button");
	
// 	$.ajax({
// 			type:"GET",
// 			url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBozij7O9-LBYqRlEPS5IKUUY9jXvOiKIk&sensor=false",
// 			dataType: "jsonp",
// 			error: function(jqXHR, status, error){
// 				alert("no! something is wrong" + error);
// 			},
// 			success: function (data, datatype, jqXHR){
// 				console.log("success!");

// 				var records = data.records;
// 				console.log(records);
// 				var html = '';

// 				for (var i = 0; i <records.length; i++){

// 				html += '<li>' + records[i].source.domain + '</li>\n';
// 				};
// 				$(".righthere").append(html);	
// 			}

// 	});

// }


