// javascript
// Copy code
document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('lengthInput');
    const generateButton = document.getElementById('generateButton');
    const passwordOutput = document.getElementById('passwordOutput');

    generateButton.addEventListener('click', function() {
        const length = parseInt(lengthInput.value, 10);
        const password = generatePassword(length);
        console.log(password);
        passwordOutput.textContent = password;
        passwordOutput.classList.remove('hidden');
    });

    function generatePassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password = '';
        // console.log(charset.length);
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});
