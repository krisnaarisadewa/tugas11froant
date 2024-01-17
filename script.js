$(document).ready(function(){
    // Slider
    let slideIndex = 0;
  
    function showSlides() {
      $(".slider img").hide();
      slideIndex++;
      if (slideIndex > $(".slider img").length) { slideIndex = 1 }
      $(".slider img:nth-child(" + slideIndex + ")").fadeIn(500);
      setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }
  
    showSlides();
  
    // Modal
    $(".modal-btn").click(function(){
      $("#myModal").fadeIn(300);
    });
  
    $(".close").click(function(){
      $("#myModal").fadeOut(300);
    });
  
    // Form submission
    $("#biodataForm").submit(function(e){
      e.preventDefault();
      // Handle form submission logic here
      // You can use AJAX to send the data to a server
      $("#myModal").fadeOut(300);
    });
  });