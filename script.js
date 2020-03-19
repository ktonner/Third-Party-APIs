
//put the current date at the top
var currentDay = $("#currentDay")
currentDay.text(moment().format('MMMM Do YYYY'))

//declaring current hour as a variable 
let currentHour = moment().hour()


//Setting colors of all rows
//loop through all rows
$("textarea").each(function(){
//conditional if the hour has passed
if(currentHour > $(this).data("value")){
    $(this).addClass("past")
}
//if current hour
else if (currentHour == $(this).data("value")){
    $(this).addClass("present")
}
//else it's the future
else {
    $(this).addClass("future")
}
})

//Save button click
$(".saveBtn").on("click", function(){
    let num = $(this).attr("id")
    console.log(num)
    let row = $(this).parent()
    let text = row.find("textarea")
    console.log(text.val())
    
    
})
    


//on loading up page should show saved text areas