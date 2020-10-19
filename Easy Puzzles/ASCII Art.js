/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
let indices = [];
let phrase = []; 
let b = false;
for (let i = 0; i < H; i++) {
    const ROW = readline();
    phrase[i] = ROW ; 
}
const al = "abcdefghijklmnopqrstuvwxyz";
for(let i = 0 ; i < T.length ; i++){
    b=false;
    for(let j = 0 ; j<26;j++){
      
if(T.charAt(i)==al.charAt(j) || T.charAt(i)==al.charAt(j).toUpperCase()){
indices.push(j);
b = true;

}

    }
    if(b==false){

    indices.push(26);
    
    }
}
let lines =[];
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
for(let j = 0 ; j<H;j++){
    lines[j]='';
for(let i = 0 ; i<indices.length;i++){
    
    lines[j] = lines[j] + phrase[j].substring(indices[i]*L,(indices[i]*L)+L);

    }
    console.log(lines[j]);
}


