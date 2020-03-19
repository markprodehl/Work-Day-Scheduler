//display time and date at the top of page
var m = moment();
// console.log(m.format("dddd, MMMM do YYYY "));
var currentDay = document.getElementById("currentDay")
currentDay.append(m.format("dddd, MMMM do YYYY, h:mm:ss a"));

var m1 = moment() +
    console.log(m.diff(m))

// set time block with current time to red

var currentHour0 = moment();

currentHour0 = document.getElementById("currentHour");
// currentHour = (m.format("h:a"));
// currentHour.append(m.format("dddd, MMMM do YYYY, h:mm:ss a"));
$("#currentHour0").text(currentHour0)

console.log(currentHour0)

var hourOne = currentHour0 + moment("1:00", 'HH')
console.log(hourOne)

//set time block with past time to grey

//set time block with future times to gre

// 
//time block is green if its future
//time black is red if its current
//time block is grey if its past
// when user clicks on save button then saves to local storage
// when they refresh page then todo list is still saved
//(get from local storage)