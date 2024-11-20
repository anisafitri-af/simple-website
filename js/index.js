//toggle class active
const headerNav = document.querySelector(".navigation-bar");

//ketika humberger menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  headerNav.classList.toggle("active");
};

// klik di luar humberger untuk menghilangkan navigation bar
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !headerNav.contains(e.target)) {
    headerNav.classList.remove("active");
  }
});
