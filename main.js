var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent = 'hello 2';
//items[1].style.fontWeight = 'bold';/
//items[1].style.backgroundColor = 'yellow'

items[2].style.backgroundColor = 'Green'

for (var i=0; items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';
}
