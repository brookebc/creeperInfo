// <section id="wrapper">
//        <script type="text/javascript">var z = document.createElement("script"); z.type = "text/javascript"; z.async = true; z.src = "http://engine.carbonads.com/z/14060/azcarbon_2_1_0_VERT"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(z, s);</script>
//         <header>
//           <h2>geolocation</h2>
//         </header>
//             <meta name="viewport" content="width=620" />

//         <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBozij7O9-LBYqRlEPS5IKUUY9jXvOiKIk&sensor=false"></script>
//             <article>
//               <p>Finding your location: <span id="status">checking...</span></p>
//             </article>
//         <script>


        
// function success(position) {
//   var s = document.querySelector('#status');
  
//   if (s.className == 'success') {
//     // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
//     return;
//   }
  
//   s.innerHTML = "found you!";
//   s.className = 'success';
  
//   var mapcanvas = document.createElement('div');
//   mapcanvas.id = 'mapcanvas';
//   mapcanvas.style.height = '400px';
//   mapcanvas.style.width = '560px';
    
//   document.querySelector('article').appendChild(mapcanvas);
  
//   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//   var myOptions = {
//     zoom: 15,
//     center: latlng,
//     mapTypeControl: false,
//     navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  
//   var marker = new google.maps.Marker({
//       position: latlng, 
//       map: map, 
//       title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
//   });
// }

// function error(msg) {
//   var s = document.querySelector('#status');
//   s.innerHTML = typeof msg == 'string' ? msg : "failed";
//   s.className = 'fail';
  
//   // console.log(arguments);
// }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(success, error);
// } else {
//   error('not supported');
// }

// </script>
    
// </section>





