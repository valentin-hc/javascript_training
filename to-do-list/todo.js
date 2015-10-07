
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    var input = document.getElementById("todo-input").value;
    var todo_list = document.getElementsByClassName("todo-list-items")[0];
    var li = document.createElement("li");
    li.innerHTML = input;
    todo_list.appendChild(li);
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Done!";
    document.querySelector('h1').style.color = "red";
    var done = document.getElementsByClassName("todo-list-items")[0].querySelector("li");
    var done_list = document.getElementsByClassName("done-list-items")[0];
    done_list.appendChild(done);
    done_list.classList.add('done');
  }
  
}
