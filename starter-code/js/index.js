


var item = document.getElementsByClassName('item');
console.log(item);

  function getTotalPrice() {
    var subArray= [];
    for (var i = 0; i<item.length; i++){
      var price = parseInt(document.getElementsByClassName('price')[i].innerHTML);
      console.log(price);
      var quantity= document.getElementsByClassName('quantity')[i].value;
      console.log(quantity);
      var itemTotal = ('$' + price * quantity);
      console.log (itemTotal);
      document.getElementsByClassName('subtotal')[i].innerHTML=itemTotal;
      subArray.push(price * quantity);
}
console.log(subArray);
// loop through subArray and add everything up
var grandTotal = subArray.reduce(function(a,b){
  return a + b;
}, 0);
console.log(grandTotal);

document.getElementById('totalPrice').innerHTML=grandTotal;

}






// var subArray= [];
//
// function updateTotalPrice() {
//   var blah = document.getElementsByClassName('price')
//
//   for (var i = 0; i<blah.length; i++){
//     var sumTotal= document.getElementsByClassName('subtotal')[i];
//   subArray.push(sumTotal);
// }
// }

 // console.log(subArray);

//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   // var createItemButton = document.getElementById('new-item-create');
//   // var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   // createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
