const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const b=[...a]
const b=[...a.map(row=>[...row])]
console.log(b);