"use strict"
const cookieBox = document.querySelector(".cookies"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{
  //setting cookie for 2 days, after two days it'll be expired automatically =))
  document.cookie = "CookieBy=nikaGerm; max-age="+60*60*24*2;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=nikaGerm"); //checking our cookie
//if cookie is set then hide the cookie box else show it =))
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");