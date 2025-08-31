const links = [
  "https://www.desmos.com/scientific", 
  "https://www.accuweather.com/",      
  "https://todoist.com/"               
];

document.querySelectorAll(".forExample").forEach((card, i) => {
  card.addEventListener("click", () => {
    window.open(links[i], "_blank"); 
  });
});

const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light"); })
