function menuPage() {
  let contentElement = document.querySelector('#content-div');
  const tabContent = document.createElement('div');
  tabContent.textContent = "This is where the stuff for the MENU tab goes"
  contentElement.appendChild(tabContent);

}

export {menuPage}