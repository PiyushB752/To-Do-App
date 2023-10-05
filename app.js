// js code for to do app
var listOfActivities = []
// create an array named a list to store our todo activities
var input = document.getElementById('input')
//create a dom variable named input to get to do activities added from html form
var todolist = document.getElementById('todolist');
// create a dom variable todolist ul tag(unordered list)
document.getElementById('button').onclick = click;
//using onclick to run the click function when button is clicked.

// adding a todo activity
function click(){
    listOfActivities.push(input.value);
    console.log(listOfActivities);
    // using push array operation to add the input todo activity to the list created earlier
    input.value = "";
    // giving empty string to input after pushing it to array
    showlist();
    // calling a function showList() to display the todo activities present in the list after addding new element
}
// function -> showlist()
function showList(){
    // using innerhtml dom property to set html, giving empty string initially
    todolist.innerHTML = " ";
    // to display each to do activity from the list using innerhtml property.
    listOfActivities.forEach(function (n,i){
        todolist.innerHTML +=
        "<li>"+
        n +
        "<a onclick = 'editItem('>" + 
        i + 
        ")'> Edit</a>" +
        "<a onclick='deleteItem(" +
        i +
        ")'>&times | </a></li>";
    });
}

// deleting an activity 
function deleteItem(i){
    // Using splice array operations to remove one item at specified index
    listOfActivities.splice(i,1);
    //Display the todo list
    showList();
}

//Editing an activity
function editItem(i){
    //using prompt to get the new value of the activity after editing
    var newValue = prompt("Please insert your new value");
    // using splice array operation to remove the previous activity and add the new activity
    listOfActivities.splice(i, 1, newValue);
    //Display the list
    showList();
}