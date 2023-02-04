// Storing grocery list elements
const groceries = [];
const groceryForm = document.getElementsByClassName('grocery-form');
const submitGroceryBtn = document.getElementById('submit-grocery');
const groceryList = document.getElementById('grocery-list');
const groceryTextField = document.getElementById("new-grocery");

// Add functionality to the grocery list
const addGrocery = () => {
    console.log("adding grocery");
    console.log(groceryTextField.value);

    // grab new grocery item and reset text field
    let newGrocery = groceryTextField.value;
    groceryTextField.value = "";

    // Create new grocery list item
    let newListItem = document.createElement("li");
    newListItem.appendChild(document.createTextNode(newGrocery + "  "));

    // Add delete button to the list item as a child
    let delButton = document.createElement("button");
    delButton.innerText = "x";
    newListItem.appendChild(delButton);

    //add an event listener for the delete button
    delButton.addEventListener("click", function(){
          
        //get the parent of the span (li) 
        let listItem = this.parentNode;
        //get the parent of the list item (ul)
        let list = listItem.parentNode;
        //remove the child from the list         
        list.removeChild(listItem);
       
    });

    // Add grocery item to the list
    groceryList.appendChild(newListItem);
}

//add event listener to grocery button and form submit
submitGroceryBtn.addEventListener("click", addGrocery);