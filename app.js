// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
// // const myBorder = document.getElementById('myBorder');
// // const para = document.getElementById('para');

// myButton.addEventListener('click', () => {
//     myHeading.style.color = myTextInput.value;
// });

// // myBorder.addEventListener('click', () => {
// //     para.style.border = '2px solid black'
// // })

// const myList = document.getElementsByTagName('li');

// for(let i = 0; i < myList.length; i++){
//     myList[i].style.color = 'purple';
// }

// const errorNotPurple = document.getElementsByClassName('error-not-purple');

// for (let i = 0; i < errorNotPurple.length; i++) {
//     errorNotPurple[i].style.color = 'blue';
// }

// const evens = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < evens.length; i++) {
//     evens[i].style.backgroundColor = 'lightgray';
// }
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});
// listDiv.addEventListener('mouseout', (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
})

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
})

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild(li);
// });

