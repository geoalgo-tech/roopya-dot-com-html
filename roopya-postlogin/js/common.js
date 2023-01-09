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

// rp progress circle script
let percentageElem = document.querySelector(".rp-progress-circle");
if (percentageElem) {
  let percentageElemVal = percentageElem.getAttribute("data-percentage");
  console.log(percentageElemVal);
  const percentageElemStyle = {
    background: `radial-gradient(circle closest-side, white 90%, transparent 0 0), conic-gradient(var(--circleColor) 0% ${percentageElemVal}, #ddd ${percentageElemVal} 100%)`,
  };
  Object.assign(percentageElem.style, percentageElemStyle);
}

// filter items script
let filterBtns = document.querySelectorAll("[data-filter-link-id]");
let filterBtnsArr = Array.from(filterBtns);

console.log(filterBtnsArr);
filterBtnsArr.map((item, index) => {
  item.addEventListener("click", function () {
    //console.log(item.getAttribute("data-filter-link-id"));
    let filterLinkParent = item.closest(".filter-item-wrapper");
    //console.log(filterLinkParent);
    let filterLinkId = item.getAttribute("data-filter-link-id");
    let filterItems = filterLinkParent.querySelectorAll(
      "[data-filter-item-id]"
    );
    let filterItemsArr = Array.from(filterItems);
    filterItemsArr.map((item, index) => {
      let filterItemId = item.getAttribute("data-filter-item-id");
      if (filterLinkId == filterItemId) {
        item.classList.remove("filter-item-hide");
      } else if (filterLinkId == "all") {
        item.classList.remove("filter-item-hide");
      } else {
        item.classList.add("filter-item-hide");
      }
    });
  });
});
