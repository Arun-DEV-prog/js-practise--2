
// console.log(colors.length);


// const num=[1, ,3,4];
// num[100]=50
// num.length=0;
// console.log(typeof {})
// console.log({num})

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.splice(1,0,"y","m");
console.log(colors)


// for(const color of cmyk){
//      colors.push(color);
// }

colors.push(...cmyk);

console.log(colors)

let greeting={
    0:'hi',
    1:'Hello',
    length:2,
    append(message){
        [].push.call(this,message);
    },
}

greeting.append('howdy');
greeting.append('Bonjour');

console.log(greeting);

let num=[3,42,1,34,7,8];

num.splice(1,2,3);
console.log(num)






