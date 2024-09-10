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
    if (e.target.classList.contains('form-check-input')) {
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
});




