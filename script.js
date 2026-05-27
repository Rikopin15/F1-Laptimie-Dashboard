(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {

    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {

        event.preventDefault();
        event.stopPropagation();

      } else {

        event.preventDefault();

        alert("Strategy Report Submitted Successfully!");

        form.reset();
        form.classList.remove('was-validated');
      }

      form.classList.add('was-validated');

    }, false);

  });

})();