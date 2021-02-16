function utilrgbToHex(color)
{
   let hex;
   color=parseInt(color);
   if (color <= 9)
     hex = '0'+color;
   else
     hex = color.toString(16);
  if(hex.length===1)
     hex='0'+hex; 
   return hex;
}

function rgbToHex(red,green,blue)
{
   return '#'+utilrgbToHex(red)+utilrgbToHex(green)+utilrgbToHex(blue);
}




const red = document.querySelector("#input-red");
const blue = document.querySelector("#input-blue");
const green = document.querySelector("#input-green");
const output = document.querySelector("#output-hex");
const conversion = document.querySelector("#toHex");

// function componentToHex(c) {
//     let hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }
// function rgbToHex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   }


conversion.addEventListener('click',()=>{

   output.value = rgbToHex(red.value,green.value,blue.value);
//    output.style.backgroundColor=hex.value; 

});