let cantainer=document.querySelector(".cantainer")
let Randombtn=document.querySelector(".Randombtn")
let colorname=document.querySelector("#colorname")
let Applybtn=document.querySelector(".Applybtn")
let currentColorValue=document.querySelector(".currentColorValue")

let changecolor=(color)=>{
    cantainer.style.backgroundColor=color
    currentColorValue.innerHTML=`${color}`
}

var colorarray =['blur','red','green','yellow','black','cyan','skyblue','#fff','#000','#bbb','#ddd','white','pink','#aaa',];
let rendomcolorgenrator=()=>{
    var rendomumber= Math.floor(Math.random()*colorarray.length)
    return colorarray[rendomumber]
}


 Randombtn.addEventListener('click',function(){
let rencolor= rendomcolorgenrator()
changecolor(rencolor)   
 })

 Applybtn.addEventListener("click",function(){
var color =colorname.value
console.log(color)
changecolor(color)
})
