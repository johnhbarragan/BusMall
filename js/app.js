'use strict';

//global variables
let allMallItems = [];

let myContainer = document.querySelector('section');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let indexArray = [];
let clicks = 0;
let clicksAllowed = 24;
let numberOfUniqueIndexes = 6;

function Products(name, fileExtension = 'jpg'){
    this.name = name;
    this.src = `img/${name}.${fileExtension}`;
    this.view = 0;
    this.clicks = 0;
    allMallItems.push(this);
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

function selectRandomItem(){
    return Math.floor(Math.random() * allMallItems.length);
}

function renderItems (){
    while(indexArray.length < numberOfUniqueIndexes){
        let randomNumber = selectRandomItem();
        if(!indexArray.includes(randomNumber)){
            indexArray.push(randomNumber);
        }
    }
    console.log(indexArray);

    let item1 = indexArray.shift();
    let item2 = indexArray.shift();
    let item3 = indexArray.shift();

    image1.src = allMallItems[item1].src;
    image2.src = allMallItems[item2].src;
    image3.src = allMallItems[item3].src;
    image1.alt = allMallItems[item1].name;
    image2.alt = allMallItems[item2].name;
    image3.alt = allMallItems[item3].name;
    allMallItems[item1].view++;
    allMallItems[item2].view++;
    allMallItems[item3].view++;
    console.log(indexArray);
}

    renderItems();


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
        myContainer.removeEventListener('click', handleItemClick);
        renderChart();
    }
} 



function renderChart() {
    let itemClicks = [];
    let itemViews = [];
    let itemNames = [];
    for (let i = 0; i < allMallItems.length; i++) {
      itemNames.push(allMallItems[i].name);
      itemClicks.push(allMallItems[i].clicks);
      itemViews.push(allMallItems[i].view);
    }
    let chartObject = {
      type: 'bar',
      data: {
        labels: itemNames,
        datasets: [{
          label: 'number of Views',
          data: itemViews,
          backgroundColor: 'rgb(52, 177, 235)',
          borderColor: 'rgb(118, 104, 189)',
          borderWidth: 1
        },
        {
          label: 'number of Clicks',
          data: itemClicks,
          backgroundColor: 'rgb(68, 69, 63)',
          borderColor: 'rgb(243, 247, 242)',
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, chartObject);
  }

myContainer.addEventListener('click', handleItemClick);
