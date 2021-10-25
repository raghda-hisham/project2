let it2=document.querySelector('#show');

function hide(){
    it2.style.visibility='hidden';
}
function show(){
    it2.style.visibility='visible';
}

let n=0;
function hoverd(){
    n=n+1;
    document.getElementById('hov').innerHTML=n;
}