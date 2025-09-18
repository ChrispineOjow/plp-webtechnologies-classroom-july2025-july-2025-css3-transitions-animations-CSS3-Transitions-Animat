 // Part 2: JavaScript functions demonstrating scope, parameters, return values

  // Global selectors
  const box = document.querySelector('.box');
  const animateBtn = document.getElementById('animateBtn');
  const pulseBtn = document.getElementById('pulseBtn');

  // Function to toggle a CSS class on an element
  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

  // Function that returns a message based on animation state
  function getAnimationStateMsg(isActive) {
    return isActive ? 'Animation started' : 'Animation stopped';
  }

  // Function demonstrating local and global scope
  function animateBox() {
    let isActive = box.classList.contains('active'); // local scope variable
    toggleClass(box, 'active');
    isActive = !isActive;
    console.log(getAnimationStateMsg(isActive));
  }

  // Function to toggle pulse animation with reusable logic
  function togglePulseAnimation() {
    const isPulsing = box.classList.contains('pulse');
    toggleClass(box, 'pulse');
    console.log(getAnimationStateMsg(!isPulsing));
  }

  // Part 3: Combine CSS and JS by hooking functions to buttons
  animateBtn.addEventListener('click', animateBox);
  pulseBtn.addEventListener('click', togglePulseAnimation);
