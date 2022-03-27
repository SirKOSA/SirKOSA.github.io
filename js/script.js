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

 var particles = Particles.init({
	selector: '.background',
  color: ['#10f722', '#e6119b', '#710ef1'],
  maxParticles: 200,
  connectParticles: true
});

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
