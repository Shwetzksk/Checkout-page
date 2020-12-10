let numberOfBags = Number(document.querySelector('.bag-quantity-meter .number__text').textContent);
let numberOfShoes = Number(document.querySelector('.shoe-quantity-meter .number__text').textContent);

document.querySelector('.bag-quantity-meter .remove').addEventListener('click', function () {
    remove(1, 0);
    priceUpdate();
});
document.querySelector('.bag-quantity-meter .add').addEventListener('click', function () { add(1, 0); priceUpdate(); });
document.querySelector('.shoe-quantity-meter .remove').addEventListener('click', function () { remove(0, 1); priceUpdate(); });
document.querySelector('.shoe-quantity-meter .add').addEventListener('click', function () { add(0, 1); priceUpdate(); });





function remove(bag, shoe) {

    // this is for '-'
    if (bag) {
        if (numberOfBags) {
            numberOfBags--;
            document.querySelector('.bag-quantity-meter .number__text').textContent = numberOfBags;

        }
    } else if (shoe) {
        if (numberOfShoes) {
            numberOfShoes--;
            document.querySelector('.shoe-quantity-meter .number__text').textContent = numberOfShoes;

        }
    }

}
function add(bag, shoe) {

    // this is for '+'
    if (bag) {
        numberOfBags++;
        document.querySelector('.bag-quantity-meter .number__text').textContent = numberOfBags;


    } else if (shoe) {
        numberOfShoes++;
        document.querySelector('.shoe-quantity-meter .number__text').textContent = numberOfShoes;


    }
}

function priceUpdate() {

    // total cost(including shiping)
    let total = (54.99 * numberOfBags) + (74.99 * numberOfShoes) + 19;

    // when choosed item is reduced/removed to zero
    if (!numberOfBags && !numberOfShoes) {
        document.querySelector('.total__cost').textContent = `$${0}`;
        document.querySelector('.shipping__cost').textContent = `$${0}`;
    } else {

        // only total cost of items in cart (excluding shipping charges)
        const onlyItemsCost = total - 19;

        // Free shipping conditions
        if (onlyItemsCost >= 500) {
            total -= 19;
            document.querySelector('.total__cost').textContent = `${total.toFixed(2)}`;
            document.querySelector('.shipping__cost').textContent = `FREE`;
        } else {
            document.querySelector('.total__cost').textContent = `${total.toFixed(2)}`;
            document.querySelector('.shipping__cost').textContent = `$${19}`;
        }


    }

}