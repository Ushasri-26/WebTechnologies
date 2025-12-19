$(document).ready(function() {
  $("#addField").click(function() {
    $("#fields").append('<input type="text" class="form-input" placeholder="Enter something...">');
  });

  $("#removeField").click(function() {
    $("#fields input:last").remove();
  });

  $("#clearFields").click(function() {
    $("#fields").empty();
    $("#output").html(""); 
  });

  $("#showValues").click(function() {
    let values = "";
    $(".form-input").each(function(index) {
      values += "Field " + (index + 1) + ": " + $(this).val() + "<br>";
    });
    $("#output").html(values);
  });
});
