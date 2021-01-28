/*
    Task: Capture the user's search query
    1. Add an event listener for 'keyup'
    2. Capture the event in a 'let' called 'searchQuery' - storing the value
    3. Make sure the captured value is lowercase
    4. Log to the console to demonstrate it works
*/

let userInput = document.getElementById("searchInput");
userInput.addEventListener("keyup", function(event){
    let searchQuery = event.target.value.toLowerCase();
    console.log(searchQuery);
});
