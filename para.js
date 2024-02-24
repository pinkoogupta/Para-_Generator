const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    const random = (Math.random() * 25).toFixed(0);
    text += letters[random];
    // console.log(random)
  }
  return text;
};
console.log(generateWord(15));

let numOfWords;
const getData = () => {
  numOfWords = Number(input.value);
  const para = document.createElement("p");
  let data = " ";

  for (let i = 0; i < numOfWords; i++) {
    const randomnum = (Math.random() * 25).toFixed(0);
    data += generateWord(randomnum).toLowerCase();
    data += " ";
  }
  console.log(data);
  para.innerText = data;
  para.setAttribute("class", "paras");

  container.append(para);
};

