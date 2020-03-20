var hoursData = {
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': ''
};

var m = moment();
//let currentDay be the current date on the screen
var currentDay = document.getElementById("currentDay")
currentDay.append(m.format("dddd, MMMM Do YYYY"));
// let currentHour be the hour of the current time of day
var currentHour = moment()
currentHour = parseInt(moment().format("H"));

//create user object from submission
$('.saveBtn').on('click', function(event) {
    //prevent defaults
    var descriptionText = $(this).siblings(".description").val();
    console.log(descriptionText)

    var timeBlockEl = $(this).parent(".time-block").attr("id")
        // console.log(timeBlockEl)
    event.preventDefault();
    //store that data by settin it to local storage
    localStorage.setItem(timeBlockEl, JSON.stringify(descriptionText));
});

var timeBlocks = $(".time-block")

timeBlocks.each(function(index, element) {

    console.log(element.id)

    if (localStorage.getItem(element.id)) {
        var descriptionText = localStorage.getItem(element.id)
            // update dom with the returned data
            // $(element.id)
        $(element).children("textarea").val(JSON.parse(descriptionText))
    } else {
        // do nothing
    }
})

// get reference to all the hours
var timeBlockElements = $(".time-block")

// for each hour
timeBlockElements.each(function() {
    // get the hour of the block   
    var timeBlockHour = parseInt(this.id.split("-")[1]);
    // get description from hoursData
    var description = hoursData[timeBlockHour.toString()];
    // display the description


    if (timeBlockHour < currentHour) {
        $(this).addClass("past")
            // console.log(this)
    } else if (timeBlockHour === currentHour) {
        //   give present class to the hour
        $(this).addClass("present")
    } else if (timeBlockHour > currentHour) {
        //   give future class to the hour *****CANNOT GET THE COLOR TO CHANGE
        $(this).addClass("future")
    }


});