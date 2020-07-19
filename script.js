$(function () {
 
  
  var input = document.getElementById("textInputId");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnId").click();
    }
  });

  $("#btnId").on("click", function (e) {
    e.preventDefault();

    var getInput = $("#textInputId").val();

    if (getInput) {
      $("#textInputId").val("");
      $("#someOtherDivId").html("<em>" + getInput + "</em>");
    } else {
      $("#textInputId").val("");
    }

    //then maybe some other div?
    // then some code, somehow to change the format of the <p>, like css uppercase, lowercase, color, size, font-family...etc.
  });
});