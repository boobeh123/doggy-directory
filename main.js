const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';



// Fetch RequestInfo
    // Then return response as JavaScript Object
    // Then store JavaScript object into variable (data)
        // Iterate through object properties
            // Render each property as an option element
            // Append option tags to drop menu
// Drop menu listens for a click or change in select
    // Pull value from event.target object and store in variable (url)
        // Select option values create dynamic url using a template literal 
            // Drop menu options generate dynamic url to pass into a function

fetch(BREEDS_URL)
    .then(response => {                                             // Returns response
        return response.json();                                     // Returns promise with object. Object has message and status properties
    })
    .then(data =>{
        console.log(data)                                           // Returns object. Object has message and status property
        console.log(data.message)                                   // Returns object of arrays
        console.log(Object.keys(data))                              // Returns object properties in an array -> output -> message, status
        console.log(Object.keys(data.message))                      // Returns object properties in an array -> output -> 95 element array
        
        const dataObject= data.message                              // Store object in variable (dataObject)
        const dataObjectProperties = Object.keys(dataObject);       // Store array of object properties in variable (dataObjectProperties)

        for (let i = 0; i < dataObjectProperties.length; i++) {     // Loop through each object property
            const optionTags = document.createElement('option');    // Store document.createElement as a variable
            optionTags.innerText = dataObjectProperties[i];         // Render array elements onto DOM. Iterate each element and assign a text
            optionTags.value = dataObjectProperties[i];             // Assign value to array elements. Iterate each element and assign a value
            document.querySelector('select').appendChild(optionTags);// Append options to select
        }
    })

document.querySelector('select').addEventListener('change', event => {
    console.log(event);                                                         // Returns Event object
    console.log(event.target);                                                  // Returns 'select' tag with values
    console.log(event.target.value);                                            // Returns event.target value
    
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`   // Event.target.value generates dynamic url from options  literal
    console.log(url)                                                            // Returns png jpg
    getDogImg(url)                                                              // Dynamic url passed into function
})

function getDogImg(url) {
    fetch(url)                                                                  // Fetch RequestInfo from dynamic url
        .then(response => {
            return response.json();                                             // Then return response as JavaScript Object
        })
        .then(data => {
            document.querySelector('.dog-image').src = data.message;            // Then render image onto DOM from javascript object
        })
}