// let openMenu = ()=>{
// let nonDiv = document.getElementById("mobile-menu");

//    if(nonDiv.style.display === "block"){
//     nonDiv.style.display= "none"
//    }else{
//     nonDiv.style.display= "block"
//    }
// }

function openMenu(){
    let myDiv = document.getElementById("mobile-menu")

    if(myDiv.style.display === "block"){
       myDiv.style.display = "none"
    } else{
     myDiv.style.display = "block"   
    }
}