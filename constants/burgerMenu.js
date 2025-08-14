let burgerMenu = document.querySelectorAll(".menu");
let allDropdowns = document.querySelectorAll(".dropdown_list, .footer_dropdown");

export let burgerMenuAnimation = () => {
    burgerMenu.forEach((element) => {
        element.addEventListener("click", () => {
            const parent = element.parentElement;
            const targetDropdown = parent.querySelector(".dropdown_list, .footer_dropdown");

            // დავხუროთ ყველა სხვა მენიუ
            allDropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.classList.remove("dropdown_animation");
                }
            });

            // გავხსნათ ან დავხუროთ მხოლოდ მიმდინარე მენიუ
            if (targetDropdown) {
                targetDropdown.classList.toggle("dropdown_animation");
            }
        });
    });
};