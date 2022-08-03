function countdown() {          //Adds a function for my alarm function to count down 
    var seconds = document.getElementById("seconds").value; //Set the value of time to seconds

    function tick() {           //The tick happens every second
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //Sets a timeout method to not run for more than 1000 ticks
        if (seconds == -1) {
            alert("Time is up!");       //Alert to pop up once time runs out
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change the image automatically every 5 seconds
}