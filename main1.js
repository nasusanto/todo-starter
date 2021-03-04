function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
    console.log('hello world');
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("new-list-item");
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);

}
