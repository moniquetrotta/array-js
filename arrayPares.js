function substituiPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array === 0) {
      console.log("Você já é zero!")
    } else if (array[i] % 2 === 0){ 
      console.log(`Substituindo ${array[i]} por 0...`)
      array[i] = 0;
    } 
  }

  return array;
}

let arr = [1,2,4,5,6,34,55,67,89]

//console.log(substituiPares(arr));
console.log(substituiPares([]));