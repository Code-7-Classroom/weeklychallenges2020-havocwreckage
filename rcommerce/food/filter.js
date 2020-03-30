var items = document.getElementsByClassName('grid-item');
function filterItems() {
    var type = document.getElementById("filterSelect").value;
    for (var i = 0; i < items.length; i++){
        var itemType= items[i].getElementsByClassName("item__type");
        var itemTypeValue= itemType[0].innerText;
        if(itemTypeValue == type){
            items[i].style.display = '';
        }
        else if(type == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }
    }
}


