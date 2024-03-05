let plus_icon = document.querySelector("#plus_icon");
let edu = document.querySelector("#education");
let closeBtn = document.querySelector("#closeBtn");

function displayForm() {
  // let edu1 = document.querySelector(".edu_parent");
  let cloneDiv = edu.cloneNode(true);
  edu.after(cloneDiv);
}

plus_icon.addEventListener("click", displayForm);
closeBtn.addEventListener("click", closeEducationContainer);

function closeEducationContainer() {
  edu.removeChild(edu.lastElementChild);
}

$(".chosen-select").chosen({
  no_results_text: "Oops, nothing found!",
});
