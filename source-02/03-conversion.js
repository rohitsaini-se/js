let score = 33;
console.table([score, typeof score]);

// Number Conversion

score = "33";
let valueInScore = Number(score);
console.table([score, typeof score, valueInScore, typeof valueInScore]);

score = "33abc";
valueInScore = Number(score);
console.table([score, typeof score, valueInScore, typeof valueInScore]);

score = true;
valueInScore = Number(score);
console.table([score, typeof score, valueInScore, typeof valueInScore]);

score = null;
valueInScore = Number(score);
console.table([score, typeof score, valueInScore, typeof valueInScore]);

score = undefined;
valueInScore = Number(score);
console.table([score, typeof score, valueInScore, typeof valueInScore]);

// Boolean Conversion

let isActive = 1;
let boolIsActive = Boolean(isActive);
console.table([isActive, typeof isActive, boolIsActive, typeof boolIsActive]);

isActive = 0;
boolIsActive = Boolean(isActive);
console.table([isActive, typeof isActive, boolIsActive, typeof boolIsActive]);

isActive = "";
boolIsActive = Boolean(isActive);
console.table([isActive, typeof isActive, boolIsActive, typeof boolIsActive]);

isActive = "hello";
boolIsActive = Boolean(isActive);
console.table([isActive, typeof isActive, boolIsActive, typeof boolIsActive]);

// String Conversion

let num = 123;
let stringNum = String(num);
console.table([num, typeof num, stringNum, typeof stringNum]);
