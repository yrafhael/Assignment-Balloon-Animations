document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    autohide: true,
    format: 'MM-dd'
  });

  // Uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

  // Event listener for check/uncheck
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

  // Randomly select an animation class
  const attentionSeekers = [
    'animate__bounce', 'animate__flash', 'animate__pulse',
    'animate__rubberBand', 'animate__shakeX', 'animate__shakeY',
    'animate__headShake', 'animate__swing', 'animate__tada',
    'animate__wobble', 'animate__jello', 'animate__heartBeat'
  ];

  const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
  const greeting = document.querySelector('.greeting');
  greeting.classList.remove('animate__heartBeat');
  greeting.classList.add(randomAnimation);

  // Submit button event listener
  document.getElementById('submit').addEventListener('click', function () {
    const balloonsSelected = document.querySelectorAll('.form-check-input:checked').length > 0;

    if (!balloonsSelected) {
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
    allBalloonCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
      const balloonImage = document.getElementById(checkbox.id + 'Img');
      if (selectAllCheckbox.checked) {
        balloonImage.style.visibility = 'visible';
        balloonImage.classList.add("animate__animated", "animate__bounceInDown");
        balloonImage.classList.remove("animate__bounceOutUp");
      } else {
        balloonImage.classList.add("animate__animated", "animate__bounceOutUp");
        balloonImage.classList.remove("animate__bounceInDown");
        setTimeout(() => {
          balloonImage.style.visibility = 'hidden';
        }, 1000); // Wait for the animation to finish before hiding
      }
    });
  });

  // Hover effect for changing h1 color based on the balloon label
  const greetingText = document.querySelector('.greeting');
  const labelColorMap = {
    'red': 'red',
    'green': 'green',
    'blue': 'blue'
  };

  document.querySelectorAll('#checkbox-card label').forEach(label => {
    label.addEventListener('mouseover', function () {
      const labelFor = label.getAttribute('for');
      if (labelColorMap[labelFor]) {
        greetingText.style.color = labelColorMap[labelFor];
      }
    });

    label.addEventListener('mouseout', function () {
      greetingText.style.color = 'slategray';
    });
  });
});