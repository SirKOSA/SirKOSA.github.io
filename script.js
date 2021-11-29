$("#gradWork").click(function() {
    $("#gradWorkModal").addClass("is-active");
  });

  $("#internWork").click(function() {
   $("#internWorkModal").addClass("is-active");
 });
  
  $(".modal-close").click(function() {
     $("#gradWorkModal").removeClass("is-active");
     $("#internWorkModal").removeClass("is-active");
  });
  
  $(".closeModal").click(function() {
    $("#gradWorkModal").removeClass("is-active");
    $("#internWorkModal").removeClass("is-active");
 });
