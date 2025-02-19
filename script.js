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
// let showItem = document.getElementById("showing-div").style.display = "block"
// let noneItem  = document.getElementById("showing-div").style.display = "none"
// let Mybtn = document.getElementById("showBtn").onclick = function(){showHide()}
// function showHide(){
//    document.getElementById("showing-div").classList.toggle("show")
// }
//  if(noneItem.style.display === "none"){
//     document.getElementById("showing-div").style.display = "block"
//     }else if(noneItem.style.display === "block"){
//         document.getElementById("showing-div").style.display = "none"
//     }

// function showHide(){
//     let mySubMenu = document.getElementById("showing-div");
//     if(mySubMenu.style.display === "block"){
//         mySubMenu.style.display = "none"
//     } else{
//      mySubMenu.style.display = "block"   
//     }
// }

document.getElementById("showBtn").onclick = function(){showHide()}

function showHide(){
    document.getElementById("showing-div").classList.toggle("show")
}




