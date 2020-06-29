window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").children[0].style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("navbar").children[0].style.backgroundColor = "transparent";
  }
}
