const btn = document.getElementById("btn");
const tezt = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("text").textContent = "ボタンをクリックしました";
  }, 2000);
});