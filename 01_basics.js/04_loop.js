//loops
//for loop
for (let count = 1; count <=5; count++) {
    console.log("tahirakhan");
    
}
console.log("loop has ended");
//while loop 
/*let i = 1
while(i<=5){
    console.log("i=",i);
    i++;
}*/
//do while loop
/*let i= 20;
do{
    console.log("all the best");
    i++
}while(i<=10);*/

//for-of-loop use to itterate strng and ARRAY
let str = "you are the best";

for(let i of str){
    console.log("i=",i);
}

//for-in-loop used to tterate objects,array

let student = {
    name:"khanzaadi",
    age : 26,
    cgpa: 7.5,
    isPass: true
};
for ( let key in student){
    console.log("key=",key, "value=", student[key]);
}


