var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ----------auto-text-------
var Typed = new Typed('.auto-text', {
  strings: ["Programmer", "Web Designer", "Web Developer"],
  typeSpeed: 150,
  BackSpeed: 150,
  loop: true
});

