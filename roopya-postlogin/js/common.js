// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function numberOnly(evt) {
  var k;
  document.all ? (k = evt.keyCode) : (k = evt.which);
  return k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57);
}
function charOnly(evt) {
  var k;
  document.all ? (k = evt.keyCode) : (k = evt.which);
  return (
    (k > 64 && k < 91) ||
    (k > 96 && k < 123) ||
    k == 8 ||
    k == 32 ||
    k == 0 ||
    k == 9
  );
}

let navbarToggleBtn = document.querySelector(".navbar-toggler");
navbarToggleBtn.addEventListener("click", function () {
  let navbarBox = document.querySelector("#navbarNavBox");
  navbarBox.classList.toggle("slide");
});
let navbarCloseBtn = document.querySelector(".navclose-btn");
navbarCloseBtn.addEventListener("click", function () {
  let navbarBox = document.querySelector("#navbarNavBox");
  navbarBox.classList.toggle("slide");
});
