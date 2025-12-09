/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let chosenDays = [];
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const calculatedCost = document.getElementById("calculated-cost");
const clearDays = document.getElementById("clear-button");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function addDay(){
    if (this.classList.contains("clicked")===false){
        this.classList.add("clicked");
        chosenDays.push(this.id);
        recalculate();
    }else{
        this.classList.remove("clicked");
        chosenDays.pop(this.id);
        recalculate();
    }

}
monday.addEventListener("click",addDay);
tuesday.addEventListener("click",addDay);
wednesday.addEventListener("click",addDay);
thursday.addEventListener("click",addDay);
friday.addEventListener("click",addDay);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDays.addEventListener("click",function(){
    chosenDays = [];
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    recalculate();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener("click",function(){
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    recalculate();
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDay.addEventListener("click",function(){
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    recalculate();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    let totalCost = dailyRate * chosenDays.length;
    calculatedCost.innerHTML = totalCost;
}
