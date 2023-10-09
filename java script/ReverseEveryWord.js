var s="This is a sunny day"
var s1=s.split(" ");
let newsentence="";
for(let i=0;i<s1.length;i++){
   
   newsentence+=s1[i].split("").reverse().join('')+" "
}
console.log(newsentence)
    






