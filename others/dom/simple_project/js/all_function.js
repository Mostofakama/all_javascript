// document.addEventListener('DOMContentLoaded', function() {
//     // এখানে আপনার কোড লিখুন যা DOM পুরোপুরি লোড হওয়ার পরে চলবে
//     console.log('The DOM is fully loaded.');
    
//     // উদাহরণস্বরূপ, একটি নির্দিষ্ট ইলিমেন্টকে সিলেক্ট এবং মডিফাই করা
//     var myElement = document.getElementById('myElementId');
//     myElement.textContent = 'Hello, World!';
// });

document.addEventListener("DOMContentLoaded",function(){
    const lengthInput = document.getElementById("lengthInput")
    const generateButton = document.getElementById("generateButton")
    const passwordOutput = document.getElementById("passwordOutput")
    passwordOutput.textContent = "hello"
    generateButton.addEventListener("click",function(){
        var length = parseInt(lengthInput.value, 10);
        var password = generatePassword(length)
        // console.log(password);
        passwordOutput.textContent = password;
        
        passwordOutput.classList.remove('hidden');
        // console.log(passwordOutput.innerHTML = "hi");
    })
    
    function generatePassword(length){
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='"
        password = ''
        for(var i = 0;i <length;i++){
           var mainvalie = Math.floor(Math.random() * charset.length);
           password += charset[mainvalie]
          
        }
    return password;
    // console.log(password);
    }

})