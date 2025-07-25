const toggleButton = document.querySelectorAll('.faq-toggle');

toggleButton.forEach((button) => {
  button.addEventListener('click', () => {
    // toggleButton.forEach((btn) => {
    //   btn.parentNode.classList.remove('active');
    // });
    button.parentNode.classList.toggle('active');
  });
});
