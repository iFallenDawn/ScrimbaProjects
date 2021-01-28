/*
    Task: Create an event listener for 'keyup' for our input field and access the event's target and value
    
    1. Get our input field by it's ID of 'usernameInput' and create an event listener for 'keyup'
    2. Create a let called 'username' that stores the 'event.target.value' on the element 'usernameInput'
    3. console.log out the 'username'
    4. Once we have done console.log(username), go ahead and add 'toLowerCase' to the end of the assigned let, so for example: 'let username = event.target.value.toLowerCase()'
    5. console.log out the 'username' again typing in all caps and you will see it's lowercase!
    
    Helpers
    - The addEventListener() method attaches an event handler to the specified element
    - addEventListener() has a second arameter of 'function', which gives us an 'event', which inside has lots of properties and methods
    - We can use the property of 'target' which returns the element that triggered the event
    - The 'event.target' has another property called 'value', so 'event.target.value' which in the case of our input box, gives us the value the user typed in!
    - Adding the method 'toLowerCase()' will lowercase your value!
*/
let txtInput = document.getElementById("usernameInput");
txtInput.addEventListener("keyup", function(event){
    let username = event.target.value.toLowerCase();
    console.log(username);
});