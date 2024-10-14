const str = "HELLO";
function captilize(str){
    let str1="";
    for (let i=0;i<str.length;i++){
        if(str[i]>='a' && str[i]<='z' && i%2===0){
            str1+=str[i].toUpperCase();
        }
        else if(str[i]>='A' && str[i]<='Z' && i%2!==0){
            str1+=str[i].toLowerCase();
        }
        else{
            str1+=str[i];
        }
    }
    return str1;
}
console.log(captilize("hello"));
console.log(captilize("HELLO"));
console.log(captilize("hello???"));
console.log(captilize("yo eli"))