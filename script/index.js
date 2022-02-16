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
                <div class="close" onclick="closeModal()">
                <div>&times;</div>
                </div>

                <h3 class="">Name: ${jsonData.name}</h3>
                <h3 class="text"> Gender: ${jsonData.gender}</h3>
                <h3>Height: ${jsonData.height}</h3>
            </div>
        `;
        openModal();
    }
    // alert(`Name: ${jsonData.name} Genders: ${jsonData.gender} Height: ${jsonData.height}` )
}

parentDiv.addEventListener("click", closeModal);