function append(dl, dtTxt, ddTxt) {
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  dt.textContent = dtTxt;
  dd.textContent = ddTxt;
  dl.appendChild(dt);
  dl.appendChild(dd);
}

$(document).ready(function() {

  var today = new Date();
  $('#d1').val(today.getFullYear() + "-" + ('0' + (today.getMonth() + 1)).slice(-2) + "-" + ('0' + (today.getDate() + 1)).slice(-2));
  $('#d2').val($('#d1').val());
  $('#t1').val('00:00');
  $('#t2').val('00:00');
  //
  //$('#d1 #d2 #t1 #t2').
  $('#d1, #d2, #t1, #t2').on('change', function(ev) {
    var dl = document.getElementById("diff");
    while (dl.hasChildNodes()) {
      dl.removeChild(dl.lastChild);
    }

    var date1 = new Date($('#d1').val() + " " + $('#t1').val()).getTime();
    var date2 = new Date($('#d2').val() + " " + $('#t2').val()).getTime();
    append(dl, "Interval ", " from: " + $('#d1').val() + " " + $('#t1').val() + " to: " + $('#d2').val() + " " + $('#t2').val());
    var msec = date2 - date1;
    var mins = Math.floor(msec / 60000);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    var yrs = Math.floor(days / 365);
    append(dl, "In minutes: ", mins + " minutes");
    mins = mins % 60;
    append(dl, "In hours: ", hrs + " hours, " + mins + " minutes");
    hrs = hrs % 24;
    append(dl, "In days: ", days + " days, " + hrs + " hours, " + mins + " minutes");
    days = days % 365;
    append(dl, "In years: ", yrs + " years " + days + " days ");
  });

  // trigger change
  $('#d1').change();

});
