//arrays and methods
// const score = [2, 1, 7, 5, 3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const newScore = [...score,9]
// console.log(newScore)
//shopping cart app
// const score = [2, 1, 7, 5, 3];
// score.forEach((value) => {
//   console.log(value);
// });
// score.map((value) => {
//   console.log(value);
// });
// const score = [2, 1, 7, 5, 3];
// const newScore = score.map((value) => {
//   return value > 2;
// });
// console.log(newScore);

// const score = [2, 1, 7, 5, 3];
// const newScore = score.filter((value) => {
//   return value > 2;
// });
// console.log(newScore);

// const score = [2, 1, 7, 5, 2];
// const newScore = score.find((value) => {
//   return value === 2;
// });
// console.log(newScore);

// const score = [2, 1, 7, 5, 2];
// const newScore = score.reduce((sum,value) => {
//   return sum + value
// },0);
// console.log(newScore);

// const score = [2, 1, 7, 5, 2];
// const newScore = score.reduce((sum, value) => sum + value, 0);
// console.log(newScore);

const score = [2, 1, 7, 5, 2];
const newScore = score.find((value) => value === 2);
console.log(newScore);