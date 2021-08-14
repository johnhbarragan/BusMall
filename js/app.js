'use strict';

let allMallItems = [];

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let clicks = 0;
let clickAllowed = 3;

function Mall (name, fileExtension = 'jpg'){
    this.name = name;
    this.src = `images/${name}.${fileExtension}`;
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

    while (item1 === item2){
        items2 = selectRandomItem();
    }
    image1.src = 
    image2.src = 
    image3.src =
}