//Ex1 picks a number and shows all the small positive numbers smaller than it
function getNumber1() {
  let randomNumber1 = Math.floor(Math.random()*10);
  let Array1 = [];
  for(i=0; i<randomNumber1; i++){
    Array1.push(i);
  }
  let result1 = document.getElementById("result1");
  result1.textContent = `Number is: ${randomNumber1}  
   Array: ${Array1.join(', ')}`;
}

//Ex2 picks a positive number and shows all small positive even numbers smaller than it
function getNumber2() {
  let randomNumber2 = Math.floor(Math.random()*10);
  let Array2 = [];
  for(i=0; i<randomNumber2; i++){
    if(i%2==0)
    Array2.push(i);
  }
  let result2 = document.getElementById("result2");
  result2.textContent = `Number is: ${randomNumber2}  
   Array: ${Array2.join(', ')}`;
}

//Ex3 picks a positive number and shows all small positive odd numbers smaller than it
function getNumber3() {
  let randomNumber3 = Math.floor(Math.random()*10);
  let Array3 = [];
  for(i=0; i<randomNumber3; i++){
    if(i%2!=0)
    Array3.push(i);
  }
  let result3 = document.getElementById("result3");
  result3.textContent = `Number is: ${randomNumber3}  
   Array: ${Array3.join(', ')}`;
}

//Ex4 picks 10 numbers and shows the maximum number
function getNumber4(){
  function generateRandomNumbers() {
      let randomNumbers = [];
    
      for (var i = 0; i < 10; i++) {
          let randomNumber = Math.floor(Math.random() * 100);
          randomNumbers.push(randomNumber);
      }
    
      return randomNumbers;
    }
    
    let numbersArray = generateRandomNumbers();
    numbersArray.sort((a,b) => a-b);

    let result4 = document.getElementById("result4");
    result4.textContent = `Array: ${numbersArray.join(', ')} Maximum number is: ${numbersArray[numbersArray.length-1]}`;
}

//Ex5 picks 10 numbers and shows the minimum number
function getNumber5(){
  function generateRandomNumbers() {
      let randomNumbers = [];
    
      for (var i = 0; i < 10; i++) {
          let randomNumber = Math.floor(Math.random() * 100);
          randomNumbers.push(randomNumber);
      }
    
      return randomNumbers;
    }
    
    let numbersArray = generateRandomNumbers();
    numbersArray.sort((a,b) => a-b);

    let result5 = document.getElementById("result5");
    result5.textContent = `Array: ${numbersArray.join(', ')} Minimum number is: ${numbersArray[0]}`;
}

//Ex6 picks 10 numbers and shows the index of minimum number.
function getNumber6() {
  function generateRandomNumbers() {
    let randomNumbers = [];
  
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        randomNumbers.push(randomNumber);
    }
    
    return randomNumbers;
  }
  
  let numbersArray = generateRandomNumbers();
  let min = numbersArray[0];
  
  for(let i=0; i<numbersArray.length; i++){
    if(min > numbersArray[i]){
      min = numbersArray[i];
    }
  }

  let result6 = document.getElementById("result6");
  result6.textContent = `Array: ${numbersArray.join(', ')} Minimum number is: ${min} Index of minimum number is ${numbersArray.indexOf(parseFloat(min))}`;
}

