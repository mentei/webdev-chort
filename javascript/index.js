//   Harkirat singh  webdev  assingmen solution  

//  basic variable 
let hieght=20;
var pitzza=10;
const shop=1;
console.log(hieght,pitzza,shop);


//  function 

function add(a,b){
    return a+b;
}

console.log(add(hieght,pitzza));
function canvote(){
    return age>=18;

}

// need to  connect html  file 




let num=200;

function checkEven(num){
    return num%2===0;
}

console.log(checkEven(num));
//  replaced with  if else

function checkEvenIfElse(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}

console.log(checkEvenIfElse(num));

// lops 
let num3;

for(let i=0; i<num3;i++){
    console.log(i+=num3);}


    // array
let array=[1,2,3,4,5];
console.log(array[0]);

array.push(6);
console.log(array);
let arr2=array.filter(function(
    value){
        return value%2===0;
    });
 
console.log(arr2);

array.forEach(function(value){
    console.log(value);
});
