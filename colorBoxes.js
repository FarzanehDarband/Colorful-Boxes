let a =num();

document.getElementById("wrapper").innerHTML=a;


function rnd(rang){
    return Math.floor(Math.random()*rang);
}

function num(){
    var str="";
    let number =[];
    for(let i=0; i<100;i++){
        number[i]=i+1;
    }
    for(let i=0;i<number.length;i++){
        let index =Math.floor(Math.random()*100);
        if(number[index]==""){
            i--;
        }else{
            str +=`<div class="box" style="background-color:rgb(${rnd(225)},${rnd(225)},${rnd(225)})">${number[index]}</div>`;
            number[index]="";
        }
    }return str;
}