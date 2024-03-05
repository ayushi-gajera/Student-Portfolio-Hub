const searchbar = () => {
  const searchbox = document.getElementById("search").value;
  // const storeitems = document.getElementById("card-sec")
  const product = document.querySelectorAll(".card");


  // const pname = document.getElementsByTagName("h2")
  const noResult = document.getElementById("not");

  let found = false;
  for (var i = 0; i < product.length; i++) {
    let match = product[i].querySelectorAll(".card_name")[0];
    let match1 = product[i].querySelectorAll(".card_en")[0];
    
    if (match || match1) {
      let textvalue = match.textContent || match.innerHTML;
      let t = match1.textContent || match1.innerHTML;
      if (
        textvalue.indexOf(searchbox) > -1 ||
        t.indexOf(searchbox) > -1 
      ) {
        // console.log("match is", t);
        product[i].style.display = "";
        found = true;
      } else {
        product[i].style.display = "none";

      }
    }
  }
  if (found) {
    noResult.style.display = "none";
  } else {
    noResult.style.display = "block";
  }
};
