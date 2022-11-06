
const qr_img = document.querySelector(".qr_img");
const user_input = document.querySelector("#user_text");
const qr_container = document.querySelector('.qr_container');
const container = document.querySelector('.container');
const button = document.querySelector('.button');

button.addEventListener("click", ()=>{
    const input = user_input.value;
    console.log(user_input);
    
    if(input!=''){
        qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        qr_img.style.padding = "10px";
        // qr_container.style.opacity = "1";
        qr_container.classList.add("active");
        qr_container.style.border = "1px solid #3A8891";
    
    }

});