// === MAIN FIGURE ===
const figure = document.createElement("img");
figure.src = chrome.runtime.getURL("images/figure.png");
figure.style.position = "fixed";
figure.style.top = "20px"; // near the top of the screen
figure.style.left = "50%"; // center horizontally
figure.style.transform = "translateX(-50%)"; // shift left by 50% of its width to center
figure.style.zIndex = "9998";
document.body.appendChild(figure);

// === HAND ===
const hand = document.createElement("img");
hand.src = chrome.runtime.getURL("images/hand.png");
hand.id = "floating-hand";
hand.style.position = "fixed";
hand.style.width = "60px"; // adjust size as needed
hand.style.zIndex = "9999";
hand.style.pointerEvents = "none"; // lets clicks pass through
document.body.appendChild(hand);

// === MOVE HAND WITH MOUSE ===
document.addEventListener("mousemove", (e) => {
  const offsetX = -30; // half the hand width
  const offsetY = -30; // half the hand height

  hand.style.left = e.clientX + offsetX + "px";
  hand.style.top = e.clientY + offsetY + "px";
});
