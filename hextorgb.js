const red = document.querySelector("#output-red");
const blue = document.querySelector("#output-blue");
const green = document.querySelector("#output-green");
const hexinput = document.querySelector("#input-hex");
const conversion = document.querySelector("#toRGB");

conversion.addEventListener('click',()=>{


    const hex = hexinput.value
    red.value = parseInt(hex[1]+hex[2],16);
    green.value = parseInt(hex[3]+hex[4],16);
    blue.value = parseInt(hex[5]+hex[6],16);

})