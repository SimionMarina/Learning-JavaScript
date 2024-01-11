//Ex1 Print the second number to the console
function getValue1(){
  let Array1 = [4,6,10,12];
  console.log(Array1[1]);
}
getValue1();

//Ex2 Print the last number to the console
function getValue2(){
  let Array2 = [4,20,30,10];
  console.log(Array2[Array2.length-1]);
}
getValue2();

//Ex3 Print the middle number to the console.
function getValue3(){
  let Array3 = [4,20,30,10,20];
  let middleNumber = Array3[Math.floor((Array3.length-1)/2)]
  console.log(middleNumber);
}
getValue3();

//Ex4 Print yes to the console if the last number equals to the first number else print no
function getAnswer4(){
  let Array4 = [23,22,30,11];
  if(Array4[0] == Array4[Array4.length-1]){
    console.log("Yes");
  } else {
    console.log("No");
  }
}
getAnswer4();

//Ex5 Print the minimum number to the console
function getValue5(){
  let Array5 = [23,5,30,11,12];
  let min = Array5[0];
  for(i=0; i<Array5.length; i++){
    if(min > Array5[i]){
      min = Array5[i];
    }
  }
  console.log(min);
}
getValue5();

//Ex6 
function addValue(){
  let Array6 = [];
  for(let i=0; i<5; i++){
    Array6.push(prompt("Write a number"));
  }
  console.log(Array6);
  let max = Array6[0];
  for(i=0; i<5; i++){
    if(max < Array6[i]){
      max = Array6[i];
    }
  }
  let result = document.getElementById("max");
  result.textContent = `Max number is: ${max}`;
  result.style.fontSize = "24px";
}