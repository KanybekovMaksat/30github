document.getElementById('menu').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
const orderBtn = document.getElementById("order-btn");
const menuBtn = document.getElementById("menu-btn");

orderBtn.addEventListener("click", () => {
    orderBtn.classList.add("bg-orange-500", "text-white");
    menuBtn.classList.remove("bg-orange-500", "text-white");
    menuBtn.classList.add("text-orange-300");
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("bg-orange-500", "text-white");
    orderBtn.classList.remove("bg-orange-500", "text-white");
    orderBtn.classList.add("text-orange-300");
});