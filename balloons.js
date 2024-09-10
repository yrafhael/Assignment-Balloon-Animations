document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    if (e.target.classList.contains('form-check-input') && e.target.id !== 'selectAll') {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  // List of animate.css attention seeker classes
  const attentionSeekers = [
    'animate__bounce', 'animate__flash', 'animate__pulse',
    'animate__rubberBand', 'animate__shakeX', 'animate__shakeY',
    'animate__headShake', 'animate__swing', 'animate__tada',
    'animate__wobble', 'animate__jello', 'animate__heartBeat'
  ];

  // Randomly select an animation class
  const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];

  // Apply the random animation to the greeting
  const greeting = document.querySelector('.greeting');

  // Remove the default animation
  greeting.classList.remove('animate__heartBeat');
  // Add the random animation
  greeting.classList.add(randomAnimation);



  // Submit button event listener
  document.getElementById('submit').addEventListener('click', function () {
    // Check if any balloons are selected
    const balloonsSelected = document.querySelectorAll('.form-check-input:checked').length > 0;

    if (!balloonsSelected) {
      // Show the toast if no balloons are selected
      const toastElement = document.getElementById('noBalloonToast');
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  });

  // Select All functionality
  const selectAllCheckbox = document.getElementById('selectAll');
  selectAllCheckbox.addEventListener('change', function () {
    const allBalloonCheckboxes = document.querySelectorAll('#checkbox-card .form-check-input:not(#selectAll)');

    // Check or uncheck all balloon checkboxes based on "Select All"
    allBalloonCheckboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);

    // Trigger change event manually to show/hide balloons
    allBalloonCheckboxes.forEach(checkbox => {
      const event = new Event('change');
      checkbox.dispatchEvent(event);
    });
  });
});




