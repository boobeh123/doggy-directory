const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';



// Fetch RequestInfo
    // Then return response as JavaScript Object
    // Then store JavaScript object into variable (data)
        // 

fetch(BREEDS_URL)
    .then(response => {                                 // Returns response
        return response.json();                         // Returns promise with object. Object has message and status properties
    })
    .then(data =>{
        console.log(data)                               // Returns object. Object has message and status property
        console.log(data.message)                       // Returns object of arrays
        console.log(Object.keys(data))                  // Returns object properties in an array -> output -> message, status
        console.log(Object.keys(data.message))          // Returns object properties in an array -> output -> 95 element array
        
        const dataObject= data.message                              // Store object in variable (dataObject)
        const dataObjectProperties = Object.keys(dataObject);       // Store array of object properties in variable (dataObjectProperties)

        for (let i = 0; i < dataObjectProperties.length; i++) {     // Loop through each object property
            const optionTags = document.createElement('option');    // Store document.createElement as a variable
            optionTags.innerText = dataObjectProperties[i];         // Render array elements onto DOM. Iterate each element and assign a text
            optionTags.value = dataObjectProperties[i];             // Assign value to array elements. Iterate each element and assign a value
            document.querySelector('select').appendChild(optionTags);// Append options to select
        }
    })