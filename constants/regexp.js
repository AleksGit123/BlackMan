let userInfo = document.querySelectorAll(".user_info");
let form = document.querySelector("form");

// regular expressions
let nameRegexp = /^[a-zA-Z\s]{1,15}$/;
let phoneRegexp = /^(\d{9}|(\d{3}[\s-]?\d{2}[\s-]?\d{2}[\s-]?\d{2}))$/;
let emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let Regexp = {
    fullname: nameRegexp,
    phone: phoneRegexp,
    email: emailRegexp,
};

let checkRegexp = () =>{
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        userInfo.forEach(item => {
            if (Regexp[item.name] && Regexp[item.name].test(item.value)) {
                item.setCustomValidity("");
            } else {
                item.setCustomValidity(`Invalid ${item.name}`);
            }
        });
    
      
        if (form.checkValidity()) {
            console.log("ფორმა ვალიდურია!");
          
        } else {
    
            console.log("ფორმის ვალიდაცია არ შესრულდა.");
            form.reportValidity();
        }
    });
    
    userInfo.forEach(item => {
        item.addEventListener('input', () => {
            if (Regexp[item.name] && Regexp[item.name].test(item.value)) {
                item.setCustomValidity("");
            } else {
                item.setCustomValidity(`Invalid ${item.name}`);
            }
        });
    });
}

export default checkRegexp;
