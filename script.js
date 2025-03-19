document.addEventListener('DOMContentLoaded', () => {
  const formTitle = document.getElementById('form-title');
  const form = document.getElementById('auth-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitBtn = document.getElementById('submit-btn');
  const toggleForm = document.getElementById('toggle-form');
  const successMessage = document.getElementById('success-message');
  let isSignUp = false;

  toggleForm.addEventListener('click', () => {
    isSignUp = !isSignUp;
    formTitle.innerText = isSignUp ? 'Sign Up' : 'Sign In';
    submitBtn.innerText = isSignUp ? 'Sign Up' : 'Sign In';
    toggleForm.innerHTML = isSignUp
      ? 'Already have an account? <span>Sign In</span>'
      : "Don't have an account? <span>Sign Up</span>";
    successMessage.innerText = '';
    form.reset();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      showError(emailInput, 'Invalid email format');
      return;
    } else {
      clearError(emailInput);
    }

    if (!validatePassword(password)) {
      showError(passwordInput, 'Password must be at least 6 characters');
      return;
    } else {
      clearError(passwordInput);
    }

    successMessage.innerText = isSignUp
      ? 'Successfully Signed Up!'
      : 'Successfully Signed In!';
    form.reset();
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
  }

  function clearError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = '';
    errorMessage.style.display = 'none';
  }
});
