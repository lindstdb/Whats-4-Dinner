function expandCard() {
    var checkbox = document.getElementById('expand');
    var a = document.getElementById('foodRecipe');
    var b = document.getElementById('drinkRecipe');
    if (checkbox.checked == true) {
        a.className = "expandCard";
        b.className = "hide";
    } else if (checkbox.checked == !true) {
        a.className = "card";
        b.className = "card";
    }
};

function expandCard2() {
    var checkbox2 = document.getElementById('expand2');
    var a = document.getElementById('foodRecipe');
    var b = document.getElementById('drinkRecipe');
    if (checkbox2.checked == true) {
        b.className = "expandCard";
        a.className = "hide";
    } else if (checkbox2.checked == !true) {
        b.className = "card";
        a.className = "card";
    }
};

function favoriteItem() {
    var favorite = document.getElementById('heart');
    if (favorite.checked == true) {
        console.log('success');
    } else if (favorite.checked == !true) {
        console.log('also success');
    }
};

function favoriteItem2() {
    var favorite2 = document.getElementById('heart2');
    if (favorite2.checked == true) {
        console.log('success');
    } else if (favorite2.checked == !true) {
        console.log('also success');
    }
};