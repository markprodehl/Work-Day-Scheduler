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
var currentHour = parseInt(moment().format("H"));
// check localStorage for hours data
// update hoursData if localStorage for hours data isn't empty
// how to determine if time is future/present/past
// let currentHour be the hour of the current time of day
// get reference to all the hours
var timeBlockElements = $(".time-block")
    // for each hour
timeBlockElements.each(function() {
    // get the hour of the block
    // console.log(this);
    var timeBlockHour = parseInt(this.id.split("-")[1]);
    // get description from hoursData
    var description = hoursData[timeBlockHour.toString()];
    // display the description
    $(this)
        .find("textarea")
        .val(description);
    // console.log(timeBlockHour, currentHour);
    if (timeBlockHour < currentHour) {
        $(this).addClass("past")
    } else if (timeBlockHour === currentHour) {
        //   give present class to the hour
    } else {
        //   give future class to the hour
    }
});