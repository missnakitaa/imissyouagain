document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const container = document.querySelector('.container');
  const audio = document.getElementById('background-music');

  function updateAnimationDuration() {
      const messageWidth = message.offsetWidth;
      const containerWidth = container.offsetWidth;
      const totalDistance = containerWidth + messageWidth;

      const duration = totalDistance / 200; // Adjust the speed by changing the denominator
      message.style.animationDuration = `${duration}s`;
  }

  window.addEventListener('resize', updateAnimationDuration);
  updateAnimationDuration();

  // Play the background music
  audio.play();
});
