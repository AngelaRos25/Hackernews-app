
const BoxNews = document.getElementById("box-news");//dove appendere le news

//creo i box per le news
function createNewsEl(tagName, classList){
  const element = document.createElement(tagName);
  element.classList.add(classList);
  return element
};

//creare 1 div News
export function theOneDiv(newsLink, newsTitle, newsTime) {
  const divOneNews = createNewsEl("a", "one-news");
  divOneNews.href = newsLink;
  divOneNews.target = "blank";
  BoxNews.append(divOneNews);
  
  //creo il titolo
  const TitleBox = createNewsEl("div", "title-box");
  divOneNews.append(TitleBox);
  
  const titleN = document.createElement ("a");
  titleN.classList.add("titleN"); 
  titleN.text = newsTitle;
  TitleBox.append(titleN);
  
  //creo il time
  const linkTimeBox = createNewsEl("div", "time-link-box");
  divOneNews.append(linkTimeBox);

  let time = editDate(newsTime);

  const timeEl = document.createElement("p");
  timeEl.classList.add ("time-element");
  timeEl.innerText = `${time.date}/${time.month} - ${time.hour}:${time.minutes}`;
  linkTimeBox.append(timeEl);
  
  //creo il link
  const link = document.createElement ("a");
  if(newsLink) {
    link.innerText = cutUrl(newsLink);
    link.classList.add ("link");
    link.target = "blank"; 
    link.href = newsLink;
  } else {
    link.classList.add ("link");
    link.text = "not a link";
  }
  linkTimeBox.append(link);
}

//formatto la data
function editDate(timeForm) {
  let timeDate = new Date (timeForm * 1000);
  let edit = (num) => (num > 9 ? num : `0${num}`);

  timeDate.month = edit(timeDate.getMonth() + 1);
  timeDate.date = edit(timeDate.getDate());
  timeDate. hour = edit(timeDate.getHours());
  timeDate.minutes = edit(timeDate.getMinutes());

  return timeDate;
}

//funzione accorcia url news
function cutUrl(linkA){
  let editLink = linkA;

  if(editLink.includes("http://")) {
    editLink = editLink.slice(5);
  } else if(editLink.includes("https://")) {
    editLink = editLink.slice(8);
  }

  let slashLink = editLink.indexOf("/");
  editLink = editLink.slice(0, slashLink);

  return editLink;
  }