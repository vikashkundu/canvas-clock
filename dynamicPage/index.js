let changeButton = document.querySelector("#add-item-button");

changeButton.addEventListener("click", (e) => {
    let typedText = document.querySelector("#textArea");
    let textContent = typedText.value;

    if (!textContent) {
        return;
    }

    let item = document.createElement("li");

    item.innerText = textContent;

    addDeleteButtonToElem(item);

    let addedItemList = getAddedItemList();

    addedItemList.appendChild(item);

    typedText.value = "";

}, false);

function getAddedItemList() {
    let addedItemList = document.querySelector("#addedItemList");
    if (!addedItemList) {
        addedItemList = document.createElement("ul");
        addedItemList.setAttribute("id", "addedItemList");
        document.body.appendChild(addedItemList);
    }
    return addedItemList;
}

function addDeleteButtonToElem(elem) {
    let button = document.createElement("button");
    button.style.margin = "10px";
    button.innerText = "delete";
    removeParentOnClick(button);
    elem.appendChild(button);
}

function removeParentOnClick(button) {
    button.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    }, false);
}