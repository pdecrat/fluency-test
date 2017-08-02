$(document).ready(function() {
  mixpanel.track("page3");

  var CurrentDate = new Date();
  CurrentDate.setMonth(CurrentDate.getMonth() + 2);
	var jours = new Array("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");
	var mois = new Array("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER");

	var message = jours[CurrentDate.getDay()] + " ";   // nom du jour
   	message += CurrentDate.getDate() + "th ";   // numero du jour
   	message += mois[CurrentDate.getMonth()] + " ";   // mois
   	message += CurrentDate.getFullYear();
  $('#dateOfFluency').html(message)
})
