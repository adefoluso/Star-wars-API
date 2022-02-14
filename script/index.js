const apiCard = document.querySelector(".apiCard");
const modal = document.querySelector(".modal");
const parentDiv = document.querySelector(".parentDiv");

// Data File
data &&
  data.map((item) => {
    return (apiCard.innerHTML += `
    <div class="img-container" id="${item.id}" onclick="getInfo(${item.id})">
    <img class="style_img" src="${item.image}"/>
    </div>
    `);
});

// OpenModal
const openModal = () => {
    modal.style.display ='grid';
}

// closeModal
const closeModal = () => {
    modal.style.display ='none';
}

const getInfo = async (id) => {
    modal.innerHTML += `
        <h1>Loading...</h1>
    `;
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    const jsonData = await response.json();
    console.log(jsonData);

    if(jsonData) {
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>

                <h3>Name: ${jsonData.name}</h3>
                <h3>Gender: ${jsonData.gender}</h3>
                <h3>Height: ${jsonData.height}</h3>
            </div>
        `;
        openModal();
    }
    // alert(`Name: ${jsonData.name} Genders: ${jsonData.gender} Height: ${jsonData.height}` )
}

parentDiv.addEventListener("click", closeModal);

// const main = async() =>{

// const starWarsPeopleList = document.querySelector('div');

// fetch('https://swapi.dev/api/people')
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   let people = json.results;

//   for(p of people) {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = '<p>' + p.name + '</p>';
//     starWarsPeopleList.appendChild(listItem);
//   }

// })};

// main();
