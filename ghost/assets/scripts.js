
$('.drag').draggable();

$(".modal").draggable({
  handle: ".modal-header"
});


$(function () {
  $(".modal-content").resizable();
});


$('#exampleModal').modal({
  backdrop: 'static',
  keyboard: true,
  show: false
});

$('.dropup').click(function () {
  $(".dropup-content").toggleClass("extend")
});



function updateClock() {
  var dateTime = new Date();

  var clockElement = document.getElementById("clock");

  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();

  hours = ((hours < 10) ? "0" : "") + hours;
  minutes = ((minutes < 10) ? "0" : "") + minutes;

  clockElement.innerHTML = hours + ":" + minutes;
  setTimeout('updateClock()', 1000);
}

updateClock();

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

