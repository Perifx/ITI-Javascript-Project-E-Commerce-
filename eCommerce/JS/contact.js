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

$("#cardFlag").text(getCookie("cardCounter").split("=")[1]);

// end of navbar ------------------------------------------------------

// form validation 

var form = document.querySelector(".form");
// console.log(form);
var Name = document.querySelector("#name");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");

var nameSpan = document.querySelector("#nameSpan");
var emailSpan = document.querySelector("#emailSpan");
var emailRes = /^\w{3}@\d{3}.\w+/ig;
var nameRes = /^[a-zA-Z\-]+$/ig;
var phoneRes = /^(010|011|012|015)\d{8}/g;
var phoneSpan = document.querySelector("#phoneSpan");
// console.log(nameSpan,emailSpan,phoneSpan);

function nameValidation(){
    if(Name.value == ""){
        nameSpan.textContent = "name is required";
        nameSpan.style.display = "block";
    }
    else if(!nameRes.test(Name.value)){
        nameSpan.textContent = "name is badly formatted";
        nameSpan.style.display = "block";
    }
    else{
        nameSpan.style.display = "none";
    }
}

function emailValidation(){
    if(email.value == ""){
        emailSpan.textContent = "email is required";
        emailSpan.style.display = "block";
    }
    else if(!emailRes.test(email.value)){
        emailSpan.textContent = "Email is badly formatted";
        emailSpan.style.display = "block";
    }
    else{
        emailSpan.style.display = "none";
    }
}

function phoneValidation() {
    if(phone.value.length < 8){
        phoneSpan.textContent = "Phone is badly formatted";
        phoneSpan.style.display = "block";
    }
    else if(!phoneRes.test(phone.value)){
        phoneSpan.textContent = "Name is badly formatted";
        phoneSpan.style.display = "block";
    }
    else{
        phoneSpan.style.display = "none";
    }
}

 
form.onsubmit = function(e){

    e.preventDefault();

    nameValidation();

    emailValidation();

    phoneValidation();

    // form.submit();
}


function cardHolder(){
    var test = JSON.parse(getCookie("product"));
    console.log(test);
   
    for(var i=0; i < test.length; i++){
   
     $("#cardFlag").text(test[i].counter);
   }
   console.log(test.length);
   console.log(imgArr, nameArr, priceArr, countArr);
   
   }
  
   cardHolder();