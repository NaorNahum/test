console.log("hello world");
let b = 5; // let is a variable that CAN be changed
const c = 5; //const is a constant thorught life and cannot be changed like naor yadid ha kaka

function add(a, b) {
  return a + b;
}

const addv2 = () => {};

let sum = add(b, c);
console.log(sum);

let firstname = "naor";
let lastname = "nahum";
let fullname = firstname + " " + lastname;
console.log(firstname, lastname);
console.log(firstname + " " + lastname);
console.log(`${firstname} ${lastname}`);

const arr = [1, 2, 3]; //array is always defindes with const
console.log(arr.length);
console.log(arr[0]);

arr.push(4);
console.log(arr);
let temp = arr.pop();
console.log(temp);

function iseven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function isevenprint(number) {
  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

let ans = iseven(6);
console.log(ans);
isevenprint(6);

function test() {
  console.log("jksjdk");
  return; //return get you out of the function
  console.log("jksjdk");
  console.log("jksjdk");
}
test();

const arrnew = [];
//first section ouccour in the start of the for.
// if the second section is true, it continues the loop.
// occours at the end of each iteratoion of the loop
for (let index = 0; index < 20; index++) {
  arrnew.push(index);
}
console.log(arrnew);

for (let index = arrnew.length - 1; index >= 0; index--) {
  console.log(arrnew[index]); //index is a number
}
