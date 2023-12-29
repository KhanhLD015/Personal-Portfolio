let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  for (let s in sections) {
    if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
      let id = sections[s].id;
      document.querySelector(".active").classList.remove("active");
      document.querySelector(`a[href*=${id}]`).classList.add("active");
    }
  }
};
