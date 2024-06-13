// ----------auto-text-------
var Typed = new Typed('.auto-text', {
  strings: ["Programmer", "Web Designer", "Web Developer"],
  typeSpeed: 150,
  BackSpeed: 150,
  loop: true
});

// -------------------------------------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ==========================Side Bar===================

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

