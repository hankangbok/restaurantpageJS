function onPageLoad() {
  console.log("This is a test for the onFileLoad.js page");
  return "this is a test test for onFileLoaddd";
}

function actualPageLoad() {
  let contentElement = document.querySelector('#content');

  // let header = document.createElement('header');
  // header.textContent = "Maejoo by Chef Sue";
  // contentElement.appendChild(header);
  let theHeader = document.createElement('div');
  theHeader.id ='my-header';
  contentElement.appendChild(theHeader);
  let headerSelector = document.querySelector('#my-header');
  let logoImage = document.createElement('img');
  // logoImage.src = './../img/maejoologosmall.gif';
  logoImage.src = 'maejoologosmall.gif';
  logoImage.id = 'theLogo';
  theHeader.innerHTML =
  `<ul>
    <li id = 'aboutPageButton'><a href= #>About Maejoo</a></li>
    <li id = 'contactPageButton'><a href= #>Contact Us</a></li>
    <li id = 'menuPageButton'><a href= #>Menu</a></li>
  <ul>`;
  headerSelector.appendChild(logoImage);

  // This div will hold the elements that will be wiped out
  // everytime we switch between tabs
  let contentsMainDiv = document.createElement('div');
  contentsMainDiv.id = 'content-div';
  contentElement.appendChild(contentsMainDiv);
  let contentMainDivSelector = document.querySelector('#content-div');

  let chikinImage = document.createElement('img');
  // For some reason, githubpages wont load images unless they're inside /dist
  // chikinImage.src = './../img/chikin.jpg';
  
  // chikins.jpg is inside dist. 
  chikinImage.src = 'chikins.jpg';
  chikinImage.id = 'chikin';
  contentMainDivSelector.appendChild(chikinImage);

  appendItem(undefined,'news-container','','#content-div');
  appendItem('newsitem','firstnewsitem', 'I Just want this to work.','#news-container');
  let firstNewsText = document.getElementById('firstnewsitem');
  firstNewsText.innerHTML = 
    `<h1>WHAT IS MAEJOO?</h1>
    <h2>Maejoo does not mean "every week"</h2>
    <h2>It is also the soybean baseof staple Korean Sauces</h2>`;
  
    appendItem('newsitem','secondnewsitem', 'I Just want this to work.','#news-container');
  let secondNewsText = document.getElementById('secondnewsitem');
  secondNewsText.innerHTML = 
    `<h1>THE CHEF</h1>
    <h2>Maejoo was created by Chef Sue! It's delicious.</h2>`;

  appendItem('newsitem','thirdnewsitem', 'I Just want this to work.','#news-container');
  let thirdNewsText = document.getElementById('thirdnewsitem');
  thirdNewsText.innerHTML = 
    `<h1>BEST PICK</h1>
    <h2>The chicken is absolutely scrumptious.</h2>`;

  // let futureTabs = document.createElement('div');
  // futureTabs.id = "futureTabContent";
  // contentElement.appendChild(futureTabs);

  let footer = document.createElement('footer');
  footer.innerHTML = 
    `<p>Address: XXXX in Pelton Plaza <a href="#">Map</a></p>\
    <p>Phone #: XXX XXX XXXX</p>\
    <p><a href="">Yelp Page</a></p>\
    `;
  contentElement.appendChild(footer);

}

function justInnerContent() {
  // var contentElement = document.querySelector('#content');
  // let contentsMainDiv = document.createElement('div');
  // contentsMainDiv.id = 'content-div';
  // contentElement.appendChild(contentsMainDiv);
  let contentMainDivSelector = document.querySelector('#content-div');

  let chikinImage = document.createElement('img');
  chikinImage.src = 'chikins.jpg';
  chikinImage.id = 'chikin';
  contentMainDivSelector.appendChild(chikinImage);

  appendItem(undefined,'news-container','','#content-div');
  appendItem('newsitem','firstnewsitem', 'I Just want this to work.','#news-container');
  let firstNewsText = document.getElementById('firstnewsitem');
  firstNewsText.innerHTML = 
    `<h1>WHAT IS MAEJOO?</h1>
    <h2>Maejoo does not mean "every week"</h2>
    <h2>It is also the soybean baseof staple Korean Sauces</h2>`;
  
    appendItem('newsitem','secondnewsitem', 'I Just want this to work.','#news-container');
  let secondNewsText = document.getElementById('secondnewsitem');
  secondNewsText.innerHTML = 
    `<h1>THE CHEF</h1>
    <h2>Maejoo was created by Chef Sue! It's delicious.</h2>`;

  appendItem('newsitem','thirdnewsitem', 'I Just want this to work.','#news-container');
  let thirdNewsText = document.getElementById('thirdnewsitem');
  thirdNewsText.innerHTML = 
    `<h1>BEST PICK</h1>
    <h2>The chicken is absolutely scrumptious.</h2>`;


}

function appendItem(className, elementName, theText,parentSelector) {
  className = className || undefined;
  parentSelector = parentSelector || '#content';
  let contentElement = document.querySelector(parentSelector);
  const someElement = document.createElement('div');
  if (className != undefined) {
    someElement.classList.add('newsitem');
  }
  someElement.id = elementName;
  someElement.textContent = theText;
  contentElement.appendChild(someElement);
  console.log("added element of type " + className);
}

export {onPageLoad, actualPageLoad,justInnerContent}
