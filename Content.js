
const figure = document.createElement("img");
figure.src = chrome.runtime.getURL("images/figure.png");
figure.style.position = "fixed";
figure.style.top = "20px"; 
figure.style.left = "50%"; 
figure.style.transform = "translateX(-50%)"; 
figure.style.width = "600px";
figure.style.zIndex = "9998";
document.body.appendChild(figure);


const hand = document.createElement("img");
hand.src = chrome.runtime.getURL("images/hand.png");
hand.id = "floating-hand";
hand.style.position = "fixed";
hand.style.width = "600px"; 
hand.style.zIndex = "9999";
hand.style.pointerEvents = "none"; 
document.body.appendChild(hand);


document.addEventListener("mousemove", (e) => {
  const offsetX = -30; 
  const offsetY = -30; 

  hand.style.left = e.clientX + offsetX + "px";
  hand.style.top = e.clientY + offsetY + "px";
});
