$(document).ready(function() {
var l = $('.lead');
var currentDay =  $('#currentDay');
HeaderTime();
console.log(currentDay)
var saveChngeButtons = $(".saveBtn")
saveChngeButtons.on('click', function(){
  var currentInput = $(this).parent().find('input')
  var time = currentInput.attr('id')
  var activity = currentInput.val()
  localStorage.setItem(time, JSON.stringify(activity))
  localStorage.getItem('time',activity)

  console.log(currentInput.val())// this is the whole row, you'll need its child input

})

// header currentDay time format

function HeaderTime() {
    var today = moment().format(' dddd ');
    var date = moment().format(' ll ');
// increaset the time every second interval
setInterval(function(){
    var time = moment();
    currentDay.text(today + ", "  +  date + ", " + time.format("hh:mm:ss:A"));
}, 100);
}

var currentDayArray = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]
console.log(currentDay)

function rendercurrentDay() {
  // Clear list element and update currentday
  var somethingElse = document.createElement("date");
  // console.log(somethingElse)
  somethingElse.innerHTML = "";
  somethingElse.textContent = 'currentDay.length';
  // console.log(somethingElse)
  
    for (var i = 0; i < currentDayArray.length; i++ ) {
      var day = currentDayArray[i];
      console.log(day)
  // create currentday element
      // add to text to textarea
      somethingElse.innerText = day[i]
      // add data -index attribute
      somethingElse.setAttribute('data-index', i);
      // crear button
    var button = document.createElement("button");
      button.textContent = "fas fa-save";
      var findString = "#" + day
      var needle = document.getElementById(day)
      console.log(day)
      // console.log(needle)
      needle.value = ""
      $(findString).append(button)
      $(findString).attr("placeholder", "today")
    }
  }
   $("#clearDay").on("click", function(){
        //clearing day event if confirming yes.
        if (localStorage.length>0) {
            var clear = confirm("Do you want to clearevents?");
            if(clear){
                localStorage.clear();
            }
        }
    })


  rendercurrentDay()
 

})
