/*
    Task: Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of classname 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name
*/
let allNamesDOMCollection = document.getElementsByClassName("name");
console.log(allNamesDOMCollection);
console.log(allNamesDOMCollection[0].textContent);
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
});