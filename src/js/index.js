//general import

import '../css/style.css';//import css style

//importo i div dal file element.js
import {theOneDiv} from "./element"

const getBtn = document.getElementById('button');
const API_URL = 'https://hacker-news.firebaseio.com/v0';

let count = 10;
let baseNum = 0;

//contattare le API che restituirà 500 id

async function loadApi(){
    let response = await fetch(`${API_URL}/newstories.json`)

  .then((response) => {
    return response.json();
  })

  .then((data) => {
    const firstId = data.slice(baseNum, count);//prende 10 id
    takeId(firstId);
    return data;
  })
  .catch(error => console.error('Error fetching news:', error))
}
loadApi();
//mostrare i dettagli di queste id => titolo, link e data

function takeId(newsA){
    newsA.forEach((item) => {
      let response =  fetch (`${API_URL}/item/${item}.json`)

      .then((response) => response.json())
      .then((json) =>{
        theOneDiv(
          json.url,
          json.title,
          json.time
        )
        return json;
      })
      .catch(error => console.error('Error fetching news:', error))
    });
    
}

//aggiungere pulsante load more
getBtn.addEventListener("click", () => {
baseNum = count;
count += 10;
loadApi();
})
