let array = ["Siblings","Friends","Love","Affection","Marriage","Enemy"]
let name1 = "Suraj";
let name2 = "Samantha";
let obj = {};
let count = 0;
for (let i=0;i<name1.length;i++){
    if(obj[name1[i]]){
        obj[name1[i]]++ 
    }
    else{
        obj[name1[i]]=1;
    }
}
for (let i=0;i<name2.length;i++){
    if(obj[name2[i]] && obj[name2[i]]>0){
        obj[name2[i]]--;
        count++;
    }
}
let len = ((name1.length+name2.length)-(count*2))%6
console.log(array[len]);
