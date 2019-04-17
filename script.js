var clearBtn = document.querySelector('.clear_btn')
var itemTotalPrice = document.getElementsByClassName('item_price')
var getQTY = document.getElementsByClassName('item_qty')

clearBtn.addEventListener('click', clearBasket)

for (let i = 0; i < getQTY.length; i++) {
    const element = getQTY[i];
    element.addEventListener('change', updatePrice)
}

function updatePrice() {
    var itemTotalPrice = this.nextElementSibling
    var getItemPrice = this.getAttribute('data-price')
    var newValue = this.value
    if (isNaN(newValue) === true) {
        return alert('Please use a Number')
    }
    itemTotalPrice.innerHTML = Number(getItemPrice * newValue).toFixed(2)
    updateBasketTotal()
}

function updateBasketTotal() {
    var totalArray = 0;
    for (let i = 0; i < itemTotalPrice.length; i++) {
        totalArray += parseFloat(itemTotalPrice[i].innerHTML)
    }
    document.querySelector('.total').innerHTML = Number(totalArray).toFixed(2)
}

function clearBasket() {
    for (let t = 0; t < getQTY.length; t++) {
        getQTY[t].value = 0
    }
    for (let p = 0; p < itemTotalPrice.length; p++) {
        itemTotalPrice[p].innerHTML = 0
    }
    document.querySelector('.total').innerHTML = 0

}
updateBasketTotal()