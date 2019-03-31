function menuMobile() {
  var menu =  document.getElementsByClassName("navbar-links");
  if (menu[0].style.display === "block") {
    console.log("teste");
    menu[0].style.display = "none";
  } else {
    console.log("teste1");
    menu[0].style.display = "block";
  }
}
function modal(){
  var menu =  document.getElementsByClassName("modal");
  menu[0].style.display = "block";
}
function modalClose(){
  var menu =  document.getElementsByClassName("modal");
  menu[0].style.display = "none";

}
