//general import

import '../css/style.css';//import css style

// aggiungo axios e lodash
import axios from 'axios';
var _ = require('lodash');

//importo i div dal file element.js
import {theOneDiv} from "./element"

const getBtn = document.getElementById('button');
const API_URL = 'https://hacker-news.firebaseio.com/v0';

let count = 10;
let baseNum = 1;

//contattare le API che restituirà 500 id
async function loadApi(){
  try {
    const response = await axios.get(`${API_URL}/newstories.json`)
    takeId(response.data);
  } catch (error) {
    console.error(error);
  } 
}
loadApi();

async function takeId(){
  for (let i = baseNum; i < baseNum + count; i++){
    let newsA = await axios.get(`${API_URL}/item/${i}.json`)
    
    let titleAct = _.get(newsA, "data.title");
    let linkAct = _.get(newsA, "data.url");
    let timeAct = _.get(newsA, "data.time");

    theOneDiv(titleAct, linkAct, timeAct);
  }
}

//aggiungere pulsante load more
getBtn.addEventListener("click", () => {
baseNum = count;
count += 0;
takeId();
})
