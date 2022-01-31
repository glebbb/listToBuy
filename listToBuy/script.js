const products = ['bread', 'milk', 'apple'];

function showArr(arr, elem) {

    let out = '';

    for (i = 0; i < arr.length; i++){
        if (arr[i] !== undefined){
            out += `<div><img src = "img\\${arr[i]}.png" width = "150", height = "150"><span>${i}</span></div>`;
        }
    }
    document.querySelector(elem).innerHTML = out;
    
    document.querySelector(".out-1-source-lenght").innerHTML = `Array lenght: ${products.lenght}`;

    document.querySelector(".out-1-source-lenght").innerHTML = `Food = [${products}]`;

}

showArr(products, '.out-1-image');


function myClick() {
    if (!Number.isInteger(+document.querySelector('.array-index').value)){

        alert ('Only Integers!')
    }
    
    
    let index = +document.querySelector('.array-index').value;
    
    if (index > 50){

        alert (`You can't add too much food!`);
        return false;
    }
    else if (index < 0){

        alert (`Index can't be less than 0.`);
        return false;

    }
    
    products[index] = document.querySelector('.array-element').value;
    showArr(products, '.out-1-image');
}

document.querySelector('.add-to-array').addEventListener('click', myClick);
