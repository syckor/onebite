//math module

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// module.exports = {
//     add,
//     sub,
// };

export default function multiply(a,b){
    return a*b;
}

export {add, sub}