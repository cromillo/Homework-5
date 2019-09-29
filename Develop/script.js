
  $(document).ready(function () {

 //DATE MOMENT.JS
      let m = moment();
      console.log(m)
      $("#currentDay").text(m.format("dddd, MMMM D, YYYY"));
      console.log(m.format("dddd MMM Mo YYYY"));



//code for row to change colors
    
$(".saveButton").on("click", function() {
  
    let value = $(this).siblings(".userInput").val();
    let time = $(this).parent().attr("id");
  
    
    // save in localStorage
    localStorage.setItem(time, value);
    console.log(time)
    console.log(value)
  });
    
   function updateTime() {
       let currentHour = moment().hours();
       console.log(currentHour)

       $(".timeBlock").each( function() {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) {
            console.log(blockHour)
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            console.log(currentHour)
            $(this).removeClass("past");
            $(this).addClass("present");
       }
       else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
   }
});}
updateTime();

var interval = setInterval(updateTime, 15000);

// Local Storage
$("#time-9 .userInput").val(localStorage.getItem("time-9"));
$("#time-10 .userInput").val(localStorage.getItem("time-10"));
$("#time-11 .userInput").val(localStorage.getItem("time-11"));
$("#time-12 .userInput").val(localStorage.getItem("time-12"));
$("#time-13 .userInput").val(localStorage.getItem("time-13"));
$("#time-14 .userInput").val(localStorage.getItem("time-14"));
$("#time-15 .userInput").val(localStorage.getItem("time-15"));
$("#time-16 .userInput").val(localStorage.getItem("time-16"));
$("#time-17 .userInput").val(localStorage.getItem("time-17"));


})
