  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
  import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"; 


  
  const firebaseConfig = {
    apiKey: "AIzaSyBlJUq5stS4W15EdLOtvtckQ3JiuTx27hg",
    authDomain: "personal-portfolio-datab-f984b.firebaseapp.com",
    projectId: "personal-portfolio-datab-f984b",
    storageBucket: "personal-portfolio-datab-f984b.appspot.com",
    messagingSenderId: "518690028048",
    appId: "1:518690028048:web:06bd07e460b1bd5ece6895",
    measurementId: "G-JGFGWD2EM5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);





// navbar toggle

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}


// navbar active section
// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll("header nav a")

window.onscroll = () =>{
 
  
  //sticky navbar 
let header = document.querySelector(".header");

header.classList.toggle("sticky",window.scrollY>100)

// menu icon remove
menuIcon.classList.remove("bx-x")
navbar.classList.remove("active")
}

// swipper

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    spacebetween:50,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // dark light mode 
  let darkmode = document.querySelector("#darkMode-icon")

  darkmode.onclick = () =>{
    darkmode.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-mode")

  }

  // scroll reveal
  ScrollReveal({
     reset: true,
     distance:"80px",
     duration:2000,
     delay:200
    });

    ScrollReveal().reveal('.home-content,.heading', { origin: "top"});
    ScrollReveal().reveal('.home-img img ,.services-container,.portfolio-box,.testimonial-wrapper,.contact form', { origin: "bottom"});
    ScrollReveal().reveal('.home-content h1,.about-img img', { origin: "left"});
    ScrollReveal().reveal('.home-content h3,.home-content p,.about-content,', { origin: "right"});
    ScrollReveal({
      reset:false,
    }).reveal('.logo,.navbar ,#darkMode-icon', { origin: "right"});
    ScrollReveal({
      reset:true,
      delay:300,
      duration:3000,
    }).reveal('.profession-container', { origin: "right"});

    

let copyright = document.getElementById("copyright")   

let currentyear = new Date()

copyright.innerHTML += (
  `
  <p>Copyright &copy; ${currentyear.getFullYear()}  by Umar Aqeel | All Rights Reserved</p>
  
  `
  
  )
  

let name = document.getElementById("fullname")
let email = document.getElementById("email")
let phone = document.getElementById("phonenumber")
let title = document.getElementById("title")
let message = document.getElementById("message")
let btn = document.getElementById("btn")
let content = document.getElementById("content")
let loader = document.getElementById("loader")
console.log(message.value)



btn.addEventListener("click", async()=>{

content.style.display="none"
loader.style.display="flex"
  const docRef = await addDoc(collection(db, "data"), {
    name: name.value,
 email:email.value,
 phone:phone.value,
 title:title.value,
 message:message.value
 
});
loader.style.display="none"
content.style.display="block"
console.log("Document written with ID: ", docRef.id);

Swal.fire(
  'Thank You!',
  'Your Message Sent Succesfully',
  'success'
)
})



