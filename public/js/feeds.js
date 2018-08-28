$(document).ready(function () {
  // Getting references to the name input and items container, as well as the table body
  var feeds = $(".feeds");
  var feedsList = $(".card");
  // Getting the initial list of itemss
  getItems();

  // Function for creating a new list row for itemss
  function createItemRow(itemData) {
    var newCard = $("<div class='card item'>");
    newCard.data("items", itemData);
    newCard.append("<div class='card-body'><h5 class='card-title'>" + "Item name: " + itemData.itemName + "</h5><p class='card-text'>" + "Description: " + itemData.itemDescription + "</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>" + "Category: " + itemData.category + "</li><li class='list-group-item'>" + "Borrwed by: " + itemData.lendee + "</li><li class='list-group-item'>" + "Availability: " + itemData.available + "</li></ul></div>");
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
    });
  }

  // A function for rendering the list of itemss to the page
  function renderItemsList(cards) {
    feedsList.children().not(":last").remove();
    feeds.children(".alert").remove();
    console.log(cards);
    feedsList.prepend(cards);
  }
});
