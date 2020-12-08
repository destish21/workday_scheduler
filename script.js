$(document).ready(function() {
var display = $('.display-3');
var l = $('.lead');
var currentDay =  $('#currentDay');
HeaderTime();
console.log(currentDay)
// localStorage();
var saveChngeButtons = $(".saveBtn")
saveChngeButtons.on('click', function(){
  console.log(this)// this is the vanilla currentTarget
  console.log($(this))// $(this) is the jQuery version
  console.log($(this).parent())// this is the whole row, you'll need its child input
})

// header currentDay time format

function HeaderTime() {
    var today = moment().format("MMM Do YY");
    var date = "" //moment().format('ll,');
//     var { DateTime } = require('luxon');
// DateTime.local();

// increaset the time every second interval
setInterval(function(){
    var time = moment();
    currentDay.text(today + "," + date + "," + time.format("hh:mm:ss:A"));
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
      // console.log(day)
      // console.log(needle)
      needle.value = ""
      $(findString).append(button)
      $(findString).attr("placeholder", "tada")
      // appeend li todolist
      //todoList.appendChild(li);
    }
  }

  function display(event) {
    event.preventDefault()
    // get todisplay input value
    var newdisplay = currentInput.Value
    if(today !== '') {
      // push value into todos
    }else if (futureday){
      localStorage.setItem('newdisplay', JSON.stringify(newdisplay))
      rendercurrentDay() 

    }
  }

  rendercurrentDay()
 

})
