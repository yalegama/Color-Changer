let btn=document.getElementById('button');
let text=document.getElementById('text');

let colcors=['red','green','blue','orange','black','white'];

btn.addEventListener('click',colorChange);

function colorChange(){
    let random=Math.floor(Math.random()*colcors.length);
    document.body.style.backgroundColor=colcors[random];
    text.innerHTML=colcors[random];
}

/**hex Colour Changing */

let hexBtn=document.getElementById('hex');
let hexColor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

hexBtn.addEventListener('click',changeHexColor);

function changeHexColor(){
    let first='#';

    for(let i=0;i<6;i++){
        first+=hexColor[getHexColor()];
        console.log(first);
    }
    document.body.style.backgroundColor=first;
    text.innerHTML=first;

}
function getHexColor(){
    return Math.floor(Math.random()*hexColor.length);
}