/*
    Task: Loop over all our names
    1. Create a new for loop with a incremental counter, called 'counter'
    2. Make sure the counter is less than the allNamesDOMCollection.length in the loop conditional
    3. Declare a const called 'currentName' and store the textContext
    4. Make sure the 'currentName' is lowercase
    5. Log out the 'currentName' so we can see all the names from the loop!
*/
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    // console.log(allNamesDOMCollection[1].textContent);
    for(let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName);
    }
});