function myFunction(){
    console.log("clicked")
    let x = document.getElementById("mycard2")
    let y = document.getElementById("mycard1")
    if (x.style.display === "none" && y.style.display === "block"){
        y.style.display = "none";
        x.style.display = "block";     
    }
}


// function myFunction2(){
//     let z = document.getElementById("mycard2")
//     console.log("3")
//     if (z.style.display === "none"){
//         z.style.display === "block"
//     }else{
//         z.style.display === "none"
//     }
// }
