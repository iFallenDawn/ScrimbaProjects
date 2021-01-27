/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/
let overlay = document.getElementById("overlay");
overlay.style.display = "none";
let btnOpen = document.getElementById("open-modal");
btnOpen.addEventListener("click", function(){
   overlay.style.display = "block"; 
});
/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/
let btnClose = document.getElementById("close-modal");
btnClose.addEventListener("click", function(){
   overlay.style.display = "none"; 
});