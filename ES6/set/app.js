// set

const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8]);
console.log(sexySet);
console.log(sexySet.size);
console.log(sexySet.has(1));
console.log(sexySet.has(9));
sexySet.delete(1);
console.log(sexySet);
sexySet.clear();
console.log(sexySet);
sexySet.add("HI!");
sexySet.add([1, 2, 3, 4, 5]);
