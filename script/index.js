const cardt = document.querySelector(".card-btn");
const griditem = document.querySelector(".grid-item");
const images = [
    'https://wallpapercave.com/dwp1x/wp8576318.jpg',
    'https://wallpapercave.com/dwp1x/wp2182707.jpg',
    'https://wallpapercave.com/dwp1x/wp11285115.jpg',
    'https://wallpapercave.com/dwp1x/wp8650575.jpg',
    'https://wallpapercave.com/wp/wp3210161.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHA7t3VTwhBadQ_SSS7Yom7IS6AcPzmEYBGQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7IbXQoL2aiSMPZ3bP_BZoYLi2Sn2GCJ-iQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVj8YuaihEPcgG4u4yHQpC9i0gD3o02PRxbw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfKHJI00-MX9sOlhMY5rQ6aZ85acSZO1Ywg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFL0ZXdjRxP7o1KwNvah9JFFBIyQjugEQA3Q&usqp=CAU']


function starwars(){
    fetch('https://swapi.dev/api/people').then((response)=>response.json())
    .then((response)=>{
        let data = response.results;
        console.log(data)
        griditem.innerHTML=data.map((e, i)=>{
            let fig = ` 
            <div class="card">
            <img class="card-img" src=${images[i]} alt="Luke Skywalker" />
            <div class="card-content ">
                <div class="card-display displayN">
                    <h1 class="card-header">${e.name}</h1>
                    <p class="card-text ">
                        <strong>Height: ${e.height}cm </strong>
                    </p>
                    <p class="card-text ">
                         <strong>Gender: ${e.gender}</strong>
                    </p>
                </div>

                <button class="card-btn">About me <span></span></button>

            </div>
        </div>`;
        return fig;
        }).join('');

        const carddisplay = document.querySelectorAll(".card-content");
        const cardArray = [...carddisplay]
        console.log(cardArray)
        cardArray.forEach((element) => {
            element.lastElementChild.addEventListener("click", () => {
                // console.log(element.firstElementChild.classList)
                element.firstElementChild.classList.toggle('displayN')
            } );
            
        })
    }
    );
} 

    starwars();

module.exports = {main};