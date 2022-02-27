// Storing grocery list elements
const groceries = [];
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

    // Add new item to grocery list
    let newListItem = document.createElement("li");
    newListItem.innerHTML = newGrocery;
    groceryList.appendChild(newListItem);
}
submitGroceryBtn.addEventListener("click", addGrocery);