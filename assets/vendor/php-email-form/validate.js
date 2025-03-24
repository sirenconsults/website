/**
 * PHP Email Form Validation - v3.8
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
(function () {
  "use strict";

  let forms = document.querySelectorAll(".php-email-form");

  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;

      // Validate fields
      let formData = new FormData(thisForm);
      let isValid = true;

      formData.forEach(function (value, key) {
        if (!value) {
          isValid = false;
          displayError(thisForm, `The field ${key} is required!`);
        }
      });

      if (isValid) {
        // Form is valid, you can handle the form submission here if needed
        console.log("Form is valid and ready to be submitted.");
      }
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();
