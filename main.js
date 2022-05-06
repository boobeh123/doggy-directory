const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';



// Fetch RequestInfo
    // Then return response as JavaScript Object
fetch(BREEDS_URL)
    .then(response => {
        return response.json();
        // console.log(response)            // Returns response
        // console.log(response.json())     // Returns promise with object. Object has message and status properties
    })
    .then(data =>{
        console.log(data)                   // Returns object. Object has message and status property
        console.log(data.message)           // Returns array of properties
    })