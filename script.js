function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const length = 12;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    document.getElementById("generatedPassword").value = password;
  }
  
  function checkStrength() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("strengthResult");
    const bar = document.querySelector('.strength-level');
  
    const lengthCheck = password.length >= 8;
    const upperCheck = /[A-Z]/.test(password);
    const lowerCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCheck = /[!@#$%^&*()]/.test(password);
  
    let passedChecks = 0;
    if (lengthCheck) passedChecks++;
    if (upperCheck) passedChecks++;
    if (lowerCheck) passedChecks++;
    if (numberCheck) passedChecks++;
    if (specialCheck) passedChecks++;
  
    let strengthText = "";
    let barColor = "";
    let barWidth = "0%";
  
    if (passedChecks === 5) {
      strengthText = "Password Strength: Very Strong 💪";
      barColor = "green";
      barWidth = "100%";
    } else if (passedChecks >= 3) {
      strengthText = "Password Strength: Moderate 😐";
      barColor = "orange";
      barWidth = "60%";
    } else {
      strengthText = "Password Strength: Weak 😟";
      barColor = "red";
      barWidth = "30%";
    }
  
    result.textContent = strengthText;
    bar.style.backgroundColor = barColor;
    bar.style.width = barWidth;
  }
  