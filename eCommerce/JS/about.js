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