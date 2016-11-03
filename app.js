//Event listner and prevent page form reloading.
$('#js-shopping-list-form').on('submit', function(event) {
   event.preventDefault();
   console.log('#js-shopping-list-form')


   // Add/append item submitted below form
   $('.shopping-list').append(
     "<li>" +
       "<span class='shopping-item'>" + $('#shopping-list-entry').val() +
       //" < /span>" +
       "<div class='.shopping-item-controls'>" +
       "<button class='.shopping-item-toggle'>" +
       "<span class='.button-label'>check</span>" +
       "</button>" +
       "<button class='.shopping-item-delete'>" +
       "<span class='.button-label'>delete</span>" +
       "</button>" +
       "</div>" +
       "</li>"
   );

   //reset webform to clear out for another input.
   $(this)[0].reset()
});

  // toggle the .shopping-item__checked class
  $('ul').on('click', '.shopping-item-toggle', function() {
  		$(this.closest('.shopping-item-controls')).prev().toggleClass('shopping-item__checked');


     console.log($(this));
});


// logic for deleting items from list
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
 $(this).closest('li').remove();
 console.log($(this).closest('li'))
});
