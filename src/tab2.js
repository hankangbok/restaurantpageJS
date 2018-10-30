function contactPage() {
  let contentElement = document.querySelector('#content-div');
  const tabContent = document.createElement('div');
  tabContent.textContent = "This is where the stuff for the CONTACT tab goes"
  contentElement.appendChild(tabContent);

}

export {contactPage}