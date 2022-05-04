const btn = document.querySelector("button");
const menuContent = document.querySelector("#menu--content");

function handleBtnClick() {
  if (
    btn.classList.contains("hamburger--opened") &&
    menuContent.classList.contains("menu--content--active")
  ) {
    menuContent.classList.remove("menu--content--active");
    btn.classList.remove("hamburger--opened");
  } else {
    menuContent.classList.add("menu--content--active");
    btn.classList.add("hamburger--opened");
  }
}

btn.onclick = handleBtnClick;
