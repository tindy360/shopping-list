//Event listner and prevent page form reloading.
('.shopping-list-entry').onSubmit(function(event) {
    event.preventDefault();

    // Add/append item submitted below form
    ('.shopping-list').append(
        '<li>' +
        '<span class="shopping-item"> +$(".shopping-list-entry") </span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        '</button>' +
        '</div>' +
        '</li>'
    );

    //reset webform to clear out for another input.
    $('.shopping-list-entry').reset()

    //logic for button click line through "shopping list checked"
    $('.shopping-list').on("click", '.shopping-item-toggle', function(event) {
        $(this).closest("<li>").toggleClass('.shopping-item__checked');
    });


    //Logic for deleting an item "shopping-item-delete"
    $('.shopping-list').on("click", '.shopping-item-delete', function(event) {
        $(this).closest("<li>").toggleClass('.shopping-item', .removeClass);
    });

});
