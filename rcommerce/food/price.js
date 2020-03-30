var items = document.getElementsByClassName('grid-item');

function priceItems() {
    var price = document.getElementById("priceSelect").value;

    for (var i = 0; i < items.length; i++){
        var itemPrice= items[i].getElementsByClassName("item__price");
        var itemPriceValue= itemPrice[0].innerText;

        if(itemPriceValue == price){
            items[i].style.display = '';
        }
        else if(price == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }

    }
}