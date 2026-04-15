let re1 = new RegExp("abc");
let re2 = /abc/;

console.log(re1.test("abc"));
console.log(re1.test("123abc456"));
console.log(re1.test("abx"));

console.log(re1.exec("xxxabcxxx"));

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

