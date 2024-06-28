//Ex. 11a
/*
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);
*/

//Ex. 11b
/*
const arraySwap = [1, 20, 22, 24, 5];
const arrayValue = ['hi', 'hello', 'good'];

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue(arraySwap));
console.log(getLastValue(arrayValue));
*/

//Ex. 11c
/*
const arraySwap = [1, 20, 22, 24, 5];
const arrayValue = ['hi', 'hello', 'good'];

function swap(array) {
  const swapValue = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = swapValue;
  return array;
}

console.log(swap(arraySwap));
console.log(swap(arrayValue));
*/

//Ex. 11d
/*
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
*/

//Ex. 11e
/*
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
*/

//Ex 11f
/*
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

let i = 5;
while (i >= 0) {
  console.log(i);
  i --;
}
*/

//Ex. 11g
/*
const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}

console.log(result);
*/

//Ex. 11h
/*
const nums1 = [1, 2, 3];
const nums2 = [-2, -1, 0, 99];
const result = [];

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  console.log(result);
}

addOne(nums1);
addOne(nums2);
*/

//Ex. 11i
/*
const nums1 = [1, 2, 3];
const nums2 = [-2, -1, 0, 99];

function addNum(array, num) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }

  console.log(result);
}

addNum(nums1, 2);
addNum(nums1, 3);
addNum(nums2, 2);
*/

//Ex. 11j
/*
const nums1 = [1, 1, 2];
const nums2 = [1, 1, 3];

function addArrays(array1, array2) {
  const result = [];
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i] + array2[i]);
    }

    console.log(result);
  }
}

addArrays(nums1, nums2);
*/

//Ex. 11k
/*
const nums1 = [1, -3, 5];
const nums2 = [-2, 3, -5, 7, 10];

function countPositive(array) {
  let positiveNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNum++;
    }
  }

  console.log(positiveNum);
}

countPositive(nums1);
countPositive(nums2);
*/

//Ex. 11L to 11M
/*
function minMax(nums) {
  // We'll set the starting values of min and max
  // to null this time.
  const result = {
    min: null,
    max: null,
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    // If the min is null OR the value is
    // less than the min, update the min.
    if (result.min === null || value < result.min) {
      result.min = value;
    }

    // If the max is null OR the value is
    // greater than the max, update the max.
    if (result.max === null || value > result.max) {
      result.max = value;
    }

    // We have to use 2 if-statements above instead of
    // an if-else statement. This makes sure both the
    // min and max are set if they are null.
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));
*/

//Ex. 11n
/*
function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));
*/

//Ex. 11o
/*
const stringArray1 = ['hello', 'world', 'search', 'good'];
const stringArray2 = ['not', 'found'];

function findString(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      console.log(i);
      return;
    }
  }
  console.log(-1);
}

findString(stringArray1);
findString(stringArray2);
*/

//Ex. 11p
/*
const stringArray1 = ['hello', 'world', 'search', 'good', 'search'];

function findString(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      console.log(`Index of first appearance of 'search' in array is: ${i}`);
      return;
    }
  }
  console.log(`No 'search' has been found in this array.`);
}

findString(stringArray1);
*/

//Ex. 11q
/*
const stringArray1 = ['green', 'red', 'blue', 'red'];

function findIndex(array, word) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === word) {
      console.log(`Index of first appearance of 'search' in array is: ${i}`);
      return;
    }
  }
  console.log(-1);
}

findIndex(stringArray1, 'red');
findIndex(stringArray1, 'yellow');
*/

//Ex. 11r
/*
const foodsArray = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'egg') {
      continue;
    }
    result.push(array[i]);
  }
  return result;
}

console.log(removeEgg(foodsArray));
*/

//Ex. 11s
/*
const foodsArray = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(foods) {
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
    // Only skip 'egg' if we removed less than 2
    // of them so far.
    if (foods[i] === 'egg' && eggsRemoved < 2) {
      // Update the number of 'egg' we have removed.
      // This must be done before continue, otherwise,
      // doing continue first will just skip this code.
      eggsRemoved++;
      continue;
    }

    result.push(foods[i]);
  }

  return result;
}

console.log(removeEgg(foodsArray));
*/
function removeEgg(foods) {
  // To remove the last 2 'egg', reverse the array first.
  const reversedFoods = foods.reverse();

  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(reversedFoods[i]);
  }

  // At the end, remember to .reverse() back the result.
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
