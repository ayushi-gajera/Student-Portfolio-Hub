const searchbar = () => {
    const searchbox = document.getElementById("search").value;
    // const storeitems = document.getElementById("card-sec")
    const product_student = document.querySelectorAll(".name_student");
  
  
    // const pname = document.getElementsByTagName("h2")
    const noResult = document.getElementById("not");
  
    let found = false;
    for (var i = 0; i < product_student.length; i++) {
      let match = product_student[i].querySelectorAll(".stu_name")[0];
      let match1 = product_student[i].querySelectorAll(".stu_en")[0];
      
      if (match || match1) {
        let textvalue = match.textContent || match.innerHTML;
        let t = match1.textContent || match1.innerHTML;

        
        if (textvalue.indexOf(searchbox) > -1 || t.indexOf(searchbox) > -1) {
          // console.log("match is", t);
          product_student[i].style.display = "";
          found = true;
        } else {
          product_student[i].style.display = "none";
  
        }
      }
    }
  };
  