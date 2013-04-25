$(document).ready(function() {

    //var items = [];
	//showItems(items);
	checkForEmptyList();

	// Add an item
	$('input').on('click', function(){
		$(this).val('');

		$(this).keydown(function(e){
			if(e.keyCode === 13){
				var input = $(this).val();
				//items.push(input);


				var item = $('<li>'+input+'</li>');
				$('.itemsOnShoppingList ul').append(item);
				checkForEmptyList();

				//console.log('entered add Items with: '+ items +' items');
				//showItems(items);

				$('input').val('');

				e.preventDefault();
			}	
		});
	});	

	// Remove an item
	$('.itemsOnShoppingList').on('click', 'li', function(){
		//var itemToBeRemoved = $(this).text();
		//var index = items.indexOf(itemToBeRemoved); // finds itemToBeRemoved within array

		//items.splice(index, 1); //removes item from items array
		$(this).remove();
		$('li:empty').remove();  //had to add this to fully remove li elements
		checkForEmptyList();
		//showItems(items);
	});

	// Display items
	function checkForEmptyList() {
		var emptyListStr = $('<p class="list">your shopping list is empty</p>');
		var itemsOnListStr = $('<p class="list">items on your shopping list:</p>');
		var listItems = $('.itemsOnShoppingList').find('li').size();
		console.log('items on list: ' + listItems);
		if (listItems == 0 ){
			$('.itemsOnShoppingList ul').html(emptyListStr);	
			console.log('entered if');
			$('input').val('add a new item');
		}else{
			$('.itemsOnShoppingList .list').html(itemsOnListStr);
		}
	}	
});