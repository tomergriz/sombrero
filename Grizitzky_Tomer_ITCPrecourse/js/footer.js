//const codingLanguages = ["HTML"];
const codingLanguages = ["HTML", "CSS", "JavaScript"];
//const codingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"];

const coding = document.querySelector(".coding");

function code() {
  let str = ""
  for (let i = 0; i < codingLanguages.length - 1; i++) {
    str += codingLanguages[i];
    str += ", "
  }
  str = str.slice(0, -2);
  str += " and ";
  str += codingLanguages[codingLanguages.length - 1];
  console.log(str);
  coding.innerText = "This website has been created with: " + str;
}

code();