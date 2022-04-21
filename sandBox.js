let string = "Sttring"
let objString = { name: 'ari' }
for (let i = 0; i < string.length; i++) {
    objString[i] = string[i]
};
console.log(objString[0])