console.log('The house always wins!')

let id = document.getElementById('inputId')
let color = document.getElementById('inputStyle')

console.log(id);
console.log(color);

function setCard() {
    const card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value;
}
