const arr = [5, 6, 8, 9, 11, 5];
let hasSameElements = arr.some(function(item, index, array) {
 return array.indexOf(item) !== index;
});

console.log(hasSameElements);