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
	// $(".sources").on("click", this.seeSources);
	// $(".peepsplease").on("click", this.seeFam);
	
},

makeSearchUri: function(event){
	event.preventDefault();

	var first = $('.first').val();
	console.log(first);

	var middle = $('.middle').val();
	console.log(middle);

	var last = $('.last').val();
	console.log(last);

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
	// $(".customlink").append(readyurl);
	$("input[name='readyurl']").val(readyurl);
	// console.log(customlink);
	saveThis(readyurl);

	function saveThis() {

	var searched = {
		name: first,
		last: last,
		link: readyurl,
	};

    	$.ajax({
			type:"POST",
			url: "http://tiy-fee-rest.herokuapp.com/collections/brookes-searches/",
			data: searched,
			datatype: "JSON",
			error: function(jqXHR, status, error){
				console.log("no! there is an error.");
		},
			success: function (data, datatype, jqXHR){
				console.log("its gonna put it up there");

				console.log(searched);
				getinfo(readyurl);	
		}

	});
};

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

				console.log(data);

				peopleinfo = data.person;
				console.log(peopleinfo);

				var html = '';

				for (var i = 0; i < peopleinfo.addresses.length; i++){

					html += '<li>' + peopleinfo.addresses[i].display + '</li>';
				};

				console.log(html);

				$(".righthere").html(html);
				seeSources(readyurl);
			}
		});

	};

function seeSources(){
	
	console.log("so you wanna see my sources");
	$(".sources").append("Just a sec. Let me get it organized for you");

	$.ajax({
				type:"GET",
				url: readyurl,
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
	 				seeFam(readyurl);

	 			}
			});

		};

function seeFam(){

	// var readyurl = $(".customlink").val;

	console.log("I know your family too");
	// $(".peepsplease").append("I know who your peeps are");

	$.ajax({
				type:"GET",
				url: readyurl,
				dataType: "jsonp",
				error: function(jqXHR, status, error){
					alert("no! something is wrong" + error);
				},
				success: function (data, datatype, jqXHR){
					console.log("success!");

					var peopleinfo = data.person;
					console.log(peopleinfo);

					var html = '';

					for (var i = 0; i <peopleinfo.relationships.length; i++){

					html += '<li>' + peopleinfo.relationships[i].name.display + '</li>';
				};
					console.log(html);
					$(".yourpeeps").html(html);		 				
	
	 			}
			});

		};

	}

}


