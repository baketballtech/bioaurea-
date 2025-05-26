const temas=document.getElementById("temas")
const menu=document.getElementById("menu")

document.getElementById("menu").addEventListener("click",function(){

    let ver=temas.style.display=="block"
    console.log(ver)
    if(ver==true){
        temas.style.display="none"
    }
    else{
        temas.style.display="block"
    }
})

function manda(div){
    let div_=document.getElementById(div)
    div_.scrollIntoView({ behavior: 'smooth' });
}

