function aboutPage() {
  console.log("Someone clicked the 'about' link")
  let contentElement = document.querySelector('#content-div');
  const tabContent = document.createElement('div');
  tabContent.textContent = "This is where the stuff for the ABOUT MAEJOO tab goes"
  contentElement.appendChild(tabContent);
}


export {aboutPage}