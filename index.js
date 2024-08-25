document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".addButton");
  const input = document.querySelector(".input");
  const container = document.querySelector(".container");

  class Item {
    constructor(itemName) {
      this.createItem(itemName);
    }

    createItem(itemName) {
      const itemBox = document.createElement("div");
      itemBox.classList.add("item");

      const input = document.createElement("input");
      input.type = "text";
      input.value = itemName;
      input.disabled = true;
      input.classList.add("item_input");

      const editButton = document.createElement("button");
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.classList.add("editButton");

      const removeButton = document.createElement("button");
      removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      removeButton.classList.add("removeButton");

      container.appendChild(itemBox);
      itemBox.appendChild(input);
      itemBox.appendChild(editButton);
      itemBox.appendChild(removeButton);

      editButton.addEventListener("click", () => this.edit(input));
      removeButton.addEventListener("click", () => this.remove(itemBox));
    }

    edit(input) {
      input.disabled = !input.disabled;
      input.focus();
    }

    remove(itemBox) {
      container.removeChild(itemBox);
    }
  }

  function check() {
    if (input.value.trim() !== "") {
      new Item(input.value.trim());
      input.value = "";
    }
  }

  addButton.addEventListener("click", check);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      check();
    }
  });
});
