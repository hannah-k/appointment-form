$(document).ready(function () {
  $('#submit').click(function (e) {
    var nameInput = $("#name").val();
    var descriptionInput = $("#description").val();
    var dateInput = $("#date").val();
    var startTimeInput = $("#start-time").val();
    var endTimeInput = $("#end-time").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".start-time").text(startTimeInput);
    $(".end-time").text(endTimeInput);

    e.preventDefault();

  });
});
