var hoursData = {
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': '',
    '18': '',
    '19': '',
    '20': ''
};

var m = moment();
// console.log(m.format("dddd, MMMM do YYYY "));
//let currentDay be the current date on the screen
var currentDay = document.getElementById("currentDay")
currentDay.append(m.format("dddd, MMMM do YYYY"));

// let currentHour be the hour of the current time of day
var currentHour = moment()
currentHour = parseInt(moment().format("H"));
// console.log(currentHour)

// check localStorage for hours data


// update hoursData if localStorage for hours data isn't empty
// how to determine if time is future/present/past
// let currentHour be the hour of the current time of day


// get reference to all the hours
var timeBlockElements = $(".time-block")
    // console.log(timeBlockElements)
    // for each hour
timeBlockElements.each(function() {
    // get the hour of the block
    // console.log(this);
    var timeBlockHour = parseInt(this.id.split("-")[1]);
    // console.log(this)
    // get description from hoursData
    var description = hoursData[timeBlockHour.toString()];
    // display the description
    // console.log(description)
    $(this)
        .find("textarea")
        .val(description);
    console.log(timeBlockHour, currentHour);

    if (timeBlockHour < currentHour) {
        $(this).addClass("past")
        console.log(this)
    } else if (timeBlockHour === currentHour) {
        //   give present class to the hour
        $(this).addClass("present")
    } else {
        //   give future class to the hour
        $(this).addclass("future")
    }

});

//make styles for past, present and future see css