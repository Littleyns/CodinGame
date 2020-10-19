/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();
let res = [];
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
for(let i = 0 ; i < MESSAGE.length;i++){
res[i] =  MESSAGE.charCodeAt(i);
}

res= res.map(x=>x.toString(2));
let res2 =[];
let k = [];
let ko =[];
let cpt = 1 ; 
let res3=[];
res2='';
for(let i = 0 ; i < res.length;i++){
    if(res[i].length<7){
        res[i]="0"+res[i];
    }
}
for(let i = 0 ; i < res.length;i++){
    res3 = res3+res[i];
}
   
for(let i = 0 ; i<res3.length;i++){
    if(res3[i]!=res3[i+1] && i+1<res3.length){
cpt++;
    }
}




for(let i = 0 ; i <cpt;i++){
k[i]=1;
ko[i]=1;
}


let b= false;
let t = 0 ;

   
for(let i = 0 ; i<res3.length;i++){
    if(res3[i]==res3[i+1] && i+1<res3.length){
        k[t]=parseInt(k[t]+parseInt(1));
        
        
    }else{
        t=t+1;
    }

}
let n = 0;
for(let i = 0 ; i < cpt;i++){
    
ko[i]=res3[n];
n=n+k[i];   
   
}






for(let i = 0 ; i < cpt ; i++){
if(ko[i]==1){
res2=res2+"0 ";
}else{
res2=res2+"00 ";
}

    for(let j = 0 ; j < k[i];j++){
    res2=res2+"0";

    }
    if(i<cpt-1){
    res2=res2+" ";
    }
}
console.log(res2);
