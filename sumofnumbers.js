function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const myArray = [1, 2, 3, 4, 5];
const result1 = sumFor(myArray);
const result2 = sumWhile(myArray);
const result3 = sumRecursion(myArray);
const result4 = sumTheSimpleWay(myArray);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
