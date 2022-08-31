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
          result = myCookie[i].split("=")[1];
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

function deActiveAllBtns(){
  filtterBtns.each(function(){
    $(this).removeClass("active-filter-btn");
  });
}

// details ------------------------------------------

function cardHolder(){
  var test = JSON.parse(getCookie("product"));
  console.log(test);
 
  for(var i=0; i < test.length; i++){
 
   $("#cardFlag").text(test[i].counter);
 }
 console.log(test.length);
 
 }

 document.body.onload = function(){

   cardHolder();
 }



var counter =1;
var productDiv = "";
var productImg = "";
var productName = "";
var productPrice = "";
var productArr = [];



function Product(productImg, productName, productPrice){
  this.counter = counter++,
  this.productImg = productImg,
  this.productName = productName,
  this.productPrice = productPrice
}

Product.prototype.cardDisplay = function(){

  $("#cardFlag").text(this.counter);
}

// Add TO Card Button

$(".cardBtn").on("click", function(e){
  
  e.preventDefault();
  
  productDiv = e.target.parentElement.parentElement;
  productImg = productDiv.children[0].children[0].getAttribute("src");
  productName = productDiv.children[1].children[1].innerText;
  productPrice = productDiv.children[1].children[2].innerText;

  var product = new Product(productImg, productName, productPrice);
  
  productArr.push(product);
  


  setCookie("product", JSON.stringify(productArr), date);

  product.cardDisplay();
  

});

// card button -----------------

function cardTab(){
  window.open("./card.html");
}

// -----------------------------------

var topBtn = document.getElementById("topBtn");

window.onscroll = function(){scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.onclick = function scrollTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}