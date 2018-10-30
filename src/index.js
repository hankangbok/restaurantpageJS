import {onPageLoad, actualPageLoad,justInnerContent} from './onFileLoad';
import {aboutPage} from './tab1';
import {contactPage} from './tab2';
import {menuPage} from './tab3';

console.log("this is a testttttt");

// let contentElement = document.getElementById('content');
onPageLoad();
actualPageLoad();

function wipeSlate() {
  var contentID = document.getElementById('content-div');
  while (contentID.firstChild) {
    contentID.removeChild(contentID.firstChild);
  }
}

let aboutSelect = document.getElementById('aboutPageButton')
aboutSelect.addEventListener("click", function(){
  wipeSlate();
  aboutPage();
});

let contactSelect = document.getElementById('contactPageButton')
contactSelect.addEventListener("click", function(){
  wipeSlate();  
  contactPage();
});

let menuSelect = document.getElementById('menuPageButton')
  menuSelect.addEventListener("click", function(){
  wipeSlate();
  menuPage();
});

let logoSelect = document.getElementById('theLogo');
logoSelect.addEventListener("click", function(){
  wipeSlate();
  justInnerContent();
});

