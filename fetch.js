//make a variable called endList to represent the last 10 items in the array
let endList = [];

const todos = axios.get('https://jsonplaceholder.typicode.com/todos')
  .then((resp) => resp.data)
  .then((data) => data)
  .catch((err) => {
    console.log('YOU DIDN\'T SUCCEED!');
  })

// const myList = document.querySelector('#myList');
// myList.textContent = todos;

// console.log({todos})




//pop the last 10 items in the todos array and push them to the end of the endList
//need to get the push to wait until the todos promise is fulfilled

//function noted as async right at the top
async function getList() {
  //explains what the function is waiting for
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response);
    //the for loop I want to run when we're done waiting
    for (let i=response.data.length-10; i<response.data.length; i++) {
            endList.push(response.data[i])        
    }
    console.log(endList);
    //makes a myList variable and ids the mylist tag in the html to send this to
    const myList = document.querySelector('#myList');
    //for each item in the array, run this anonymous function
    endList.forEach(function (item) {
      
      //create a list item
      const li = document.createElement('li');
      //set its text content to our todo items title\
      li.textContent = item.title;
      //append to the mylist DOM element
      myList.appendChild(li);
    });
}
getList();

// const myList = document.querySelector('#myList');
// myList.textContent = endList;  //changing todos to the variable I want to show