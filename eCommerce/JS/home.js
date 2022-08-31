var date =  new Date;
date.setDate(date.getDate() + 3 );
// set cookie
function setCookie(key, value, expiryDate){
  document.cookie = `${key}=${value};expires=${expiryDate}`;
}

// get cookie
function getCookie(key){
  var result = "";
  var myCookie = document.cookie.split("; ");
  // console.log(myCookie);
  // console.log(myCookie[3].split("="));
  for(var i=0; i < myCookie.length; i++){
      if(myCookie[i].split("=")[0] == key){
          result = myCookie[i];
      }
  }
  return result;
};

// start of slider 

const imgs = document.querySelectorAll(".slide-container .slide");
const dots = document.querySelectorAll(".dot i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); // Start the slideshow

// end of slider -------------------------------------------------------------

// start of isotope

// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  deActiveAllBtns();
  $(this).addClass("active-filter-btn")
  $grid.isotope({ filter: filterValue });
});

var filtterBtns =  $(".filter-button-group").find("button");
console.log(filtterBtns);

function deActiveAllBtns(){
  filtterBtns.each(function(){
    $(this).removeClass("active-filter-btn");
  });
}

// details ------------------------------------------

var counter =0;
var product = "";
var productImg = "";
var productName = "";
var productPrice = "";

$(".cardBtn").on("click", function(e){
  
  e.preventDefault();
  
  counter += 1;
  setCookie("cardCounter", counter, date);
  $("#cardFlag").text(counter);


  product = e.target.parentElement.parentElement;
  productImg = product.children[0].children[0];
  productName = product.children[1].children[1].innerText;
  productPrice = product.children[1].children[2].innerText;

  setCookie("productImg", productImg, date);
  setCookie("productName", productName, date);
  setCookie("productPrice", productPrice, date);
  console.log(productPrice);

});

$("#cardFlag").text(getCookie("cardCounter").split("=")[1]);