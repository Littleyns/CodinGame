/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let LON = readline();
let LAT = readline();
let N = parseInt(readline());
let defib=[];
let name=[];
for (let i = 0; i < N; i++) {
    let DEFIB = readline();
    defib[i]=DEFIB;
    defib[i]=defib[i].replace(/,/g,'.');
     
}
LON = parseFloat(LON.replace(',','.'));
LAT = parseFloat(LAT.replace(',','.'));
let dis=[];
let LONd =[];
let LATd =[];
let posX;
let posY;
for(let i = 0 ; i < N ; i++){
   
    name[i] = defib[i].split(';')[1];
    LONd[i]=parseFloat(defib[i].split(';')[4]);
    LATd[i]=parseFloat(defib[i].split(';')[5]);
posX=parseFloat((LONd[i]-LON)*Math.cos((LAT+LATd[i])/2));
posY=parseFloat(LATd[i]-LAT);

dis[i]=parseFloat(Math.sqrt(Math.pow(posX,2)+Math.pow(posY,2))*6371);
}

   console.log(name[dis.indexOf(Math.min(...dis))]);




