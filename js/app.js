'use strict';

//global variables
let allMallItems = [];

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let clicks = 0;
let clicksAllowed = 25;

function Products(name, fileExtension = 'jpg'){
    this.name = name;
    this.src = `img/${name}.${fileExtension}`;
    this.view = 0;
    this.clicks = 0;
    allMallItems.push(this);
}

function selectRandomItem(){
    return Math.floor(Math.random() * allMallItems.length);
}
function renderItems(){
    let item1 = selectRandomItem();
    let item2 = selectRandomItem();
    let item3 = selectRandomItem();


    while (item1 === item2 || item1 === item3 || item2 === item3){
        item2 = selectRandomItem();
        item3 = selectRandomItem();
    }
    image1.src = allMallItems[item1].src;
    image2.src = allMallItems[item2].src;
    image3.src = allMallItems[item3].src;
    image1.alt = allMallItems[item1].name;
    image2.alt = allMallItems[item2].name;
    image3.alt = allMallItems[item3].name;
    allMallItems[item1].view++;
    allMallItems[item2].view++;
    allMallItems[item3].view++;

}

function handleItemClick(event){
    if (event.target === myContainer){
        alert('Please click an image');
    }
    clicks++;
    let clickItem = event.target.alt;
    console.log(clickItem);
    for (let i=0; i < allMallItems.length; i++){
        if (clickItem === allMallItems[i].name){
            allMallItems[i].clicks++;
            break;
        }
    }
    renderItems();
    if (clicks === clicksAllowed) {
        myButton.className = 'clicks-allowed';
        myContainer.removeEventListener('click', handleItemClick);
    }
} 

function renderResults(){
    let ul = document.querySelector('ul');
    for (let i =0; i < allMallItems.length; i++){
        let li = document.createElement('li')
        li.textContent = `${allMallItems[i].name} had ${allMallItems[i].view} view and was clicked ${allMallItems[i].clicks} times.`;
        ul.appendChild(li);
    }
}

new Products ('bag');
new Products ('banana');
new Products ('bathroom');
new Products ('boots');
new Products ('breakfast');
new Products ('bubblegum');
new Products ('chair');
new Products ('cthulhu');
new Products ('dog-duck');
new Products ('dragon');
new Products ('pen');
new Products ('pet-sweep');
new Products ('scissors');
new Products ('shark');
new Products ('sweep', 'png');
new Products ('tauntaun');
new Products ('unicorn');
new Products ('water-can');
new Products ('wine-glass');

console.log(allMallItems);
renderItems();

myContainer.addEventListener('click', handleItemClick);
myButton.addEventListener('click', renderResults);