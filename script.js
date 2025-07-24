document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const resultDiv = document.getElementById('formResult');
  resultDiv.textContent = "Thank you for contacting me! I'll respond soon.";
  this.reset();
});
