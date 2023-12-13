// Home section typing animation
let typed = new Typed(".typing", {
    strings: ["Frontend Developer", "Data Scientist", "Blockchain Developer"],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true
  });
  
  // About section typing animation
  let typed2 = new Typed(".typing-2", {
    strings: ["Web Developer", "UI/UX Designer", "Python /C developer","Security-focused Python and C Engineer"],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true
  });
  
  // Owl Carousel for project section
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }
    });
  });
  
  // Smooth scroll for navigation links
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var target = $(this.hash);
    $("html, body").animate({
      scrollTop: target.offset().top
    }, 500);
  });
  
  // Contact form validation
  function validateForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errors = "";
  
    if (name === "") {
      errors += "Please enter your name.\n";
    }
    if (email === "") {
      errors += "Please enter your email address.\n";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors += "Please enter a valid email address.\n";
    }
    if (message === "") {
      errors += "Please enter your message.\n";
    }
  
    if (errors !== "") {
      alert(errors);
      return false;
    } else {
      return true;
    }
  }
  
  // Submit contact form
  $("#contactForm").submit(function(event) {
    event.preventDefault();
    if (validateForm()) {
      $(this).unbind("submit").submit();
    }
  });
  