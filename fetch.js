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
async function getList() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response);
    for (let i=response.data.length-10; i<response.data.length; i++) {
            endList.push(response.data[i])        
    }
    console.log(endList);
    const myList = document.querySelector('#myList');
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