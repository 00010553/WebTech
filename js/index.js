/* creating inputs */
const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

/* (e) prevents default */
form.addEventListener('submit', (e) => {
    let messages = []
    /* if name does not have anything, will appear 'Name is required'*/
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    /* if name have anything more 0, it will prevent default'*/
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')    
}
})

/* creating function */
function test() {
    /* creating values */
    var element = document.getElementById('shoplist');
    var link = document.createElement('a');
    var br = document.createElement('br');
/* creating text and link of the text */
    link.innerHTML = 'OnePlus 8 Pro';
    link.href = 'phones.html';
/*  moving from one element to another from new paragraph*/    
    element.appendChild(br);
    element.appendChild(link);
}