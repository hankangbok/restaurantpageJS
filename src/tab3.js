function menuPage() {
  let contentElement = document.querySelector('#content-div');
  const tabContent = document.createElement('h1');
  tabContent.textContent = "MENU"
  contentElement.appendChild(tabContent);

  const menuList = document.createElement('ol');
  menuList.innerHTML = "<li>Chicken BiBimbap</li>"+
    "<li>Chicken Ramen</li>"+
    "<li>Chicken Soft Tofu Soup</li>"+
    "<li>This is a basic idea </li>"+    
    "<li>of</li>"+
    "<li>the </li>"+
    "<li>menu for Maejoo</li>";
  contentElement.appendChild(menuList);
}

export {menuPage}