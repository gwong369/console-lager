$(document).ready(function () {
  // Getting references to the name input and items container, as well as the table body
  var itemName = $("#item");
  var itemDescription = $("#description");
  var category = $("#category");
  var itemsList = $(".card.items");
  var borrowList = $(".card.borrow");
  var itemsContainer = $("#home");
  var borrowedContainer = $("#menu1");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an items
  $(document).on("submit", newItemSubmit);

  // Getting the initial list of itemss
  getItems();
  getBorrow();

  // A function to handle what happens when the form is submitted to create a new items
  function newItemSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!itemName.val().trim()) {
      return;
    }
    // Calling the upsertitems function and passing in the value of the name input
    upsertItem({
      itemName: itemName.val(),
      itemDescription: itemDescription.val(),
      category: category.val()
    });
  }

  // A function for creating an items. Calls getItems upon completion
  function upsertItem(itemData) {
    console.log(itemData);
    $.post("/api/items", itemData)
      .then(getItems);
  }

  // Function for creating a new list row for itemss
  function createItemRow(itemData) {
    var newCard = $("<div class='card item'>");
    newCard.data("items", itemData);
    newCard.append("<div class='card-body'><h5 class='card-title'>Item name</h5><p class='card-text'>" + itemData.itemDescription + "</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>" + itemData.category + "</li><li class='list-group-item'>" + itemData.lendee + "</li><li class='list-group-item'>" + itemData.available + "</li></ul></div>");
    return newCard;
  }

  // Function for retrieving items and getting them ready to be rendered to the page
  function getItems() {
    $.get("/api/items", function (data) {
      var cardsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        cardsToAdd.push(createItemRow(data[i]));
      }
      renderItemsList(cardsToAdd);
      itemName.val("");
    });
  }

  // A function for rendering the list of itemss to the page
  function renderItemsList(cards) {
    itemsList.children().not(":last").remove();
    itemsContainer.children(".alert").remove();
    if (cards.length) {
      console.log(cards);
      itemsList.prepend(cards);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no items
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("Add some items to share!");
    itemsContainer.append(alertDiv);
  }

  function createBorrowRow(itemData) {
    var newCard = $("<div class='card borrowed'>");
    newCard.data("items", itemData);
    newCard.append("<div class='card-body'><h5 class='card-title'>Item name</h5><p class='card-text'>" + itemData.itemDescription + "</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>" + itemData.category + "</li><li class='list-group-item'>" + itemData.lender + "</li></ul></div>");
    return newCard;
  }

  // Function for retrieving items and getting them ready to be rendered to the page
  function getBorrow() {
    $.get("/api/items", function (data) {
      var cardsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        cardsToAdd.push(createBorrowRow(data[i]));
      }
      renderBorrowList(cardsToAdd);
      itemName.val("");
    });
  }

  // A function for rendering the list of itemss to the page
  function renderBorrowList(cards) {
    borrowList.children().not(":last").remove();
    borrowedContainer.children(".alert").remove();
    console.log(cards);
    borrowList.prepend(cards);
  }
});