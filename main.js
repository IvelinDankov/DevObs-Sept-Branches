const btn = document.getElementById("button");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  text.classList.toggle("show");
});
