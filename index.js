const getUsers = () => {
    axios.get('https://reqres.in/api/users')
        .then(response => {
            console.log(response.status); //200 is success
        return response.data;
    })
    //this is defensive programming that helps catch errors if one were to appear.  It tells the program 
    //what to do if there is an error.  In this case, it's going to log the error into the console 
    //for readablity
        .catch(error => {
            console.error(error);
    })
    //this will be executed no matter what
    .then(json => (
        console.table(json)
    ))
}
const myFetch = () =>{  

   fetch('https://reqres.in/api/users')
   .then(response => {
       return(response.data);
   })
   .then(json => {
       console.table(json);
       console.log("fetch this", this);
   })
}

   getUsers();
   myFetch();