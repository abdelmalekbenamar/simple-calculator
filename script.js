░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░▒▓████████▓▒░      ░▒▓█▓▒░   ░▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░             ░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓████████▓▒░▒▓███████▓▒░░▒▓██████▓▒░    ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓██████▓▒░       ░▒▓█▓▒░   ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░            ░▒▓█▓▒░   ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░           ░▒▓█▓▒░    ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░  ░▒▓█▓▒░          ░▒▓████████▓▒░▒▓█▓▒░   ░▒▓████████▓▒░    ░▒▓█▓▒░    ░▒▓█▓▒░    



// let valeur1 = 0;
// let valeur2 = 0;
// let result = 0;
// let operation = "";

// const numbers = document.querySelectorAll(".nombre");
// for(let i = 0; i < numbers.length; i++){
//     numbers[i].addEventListener("click", ()=>{
//         document.querySelector(".ecran").textContent += numbers[i].textContent;
//     })
// }
// document.querySelector(".division").onclick = () => {
//     if(document.querySelector(".ecran").textContent !== ""){
//         valeur1 = parseInt(document.querySelector(".ecran").textContent);
//         operation = document.querySelector(".division").textContent
//         document.querySelector(".ecran").textContent = "";
//     }
// }

// document.querySelector(".multiplication").onclick = () => {
//     if(document.querySelector(".ecran").textContent !== ""){
//         valeur1 = parseInt(document.querySelector(".ecran").textContent);
//         operation = document.querySelector(".multiplication").textContent
//         document.querySelector(".ecran").textContent = "";
//     }
// }

// document.querySelector(".soustraction").onclick = () => {
//     if(document.querySelector(".ecran").textContent !== ""){
//         valeur1 = parseInt(document.querySelector(".ecran").textContent);
//         operation = document.querySelector(".soustraction").textContent
//         document.querySelector(".ecran").textContent = "";
//     }
// }

// document.querySelector(".addition").onclick = () => {
//     if(document.querySelector(".ecran").textContent !== ""){
//         valeur1 = parseInt(document.querySelector(".ecran").textContent);
//         operation = document.querySelector(".addition").textContent
//         document.querySelector(".ecran").textContent = "";
//     }
// }




// document.querySelector(".egal").onclick = () => {
//     if(valeur1 !== 0){
//         valeur2 = parseInt(document.querySelector(".ecran").textContent);
//         switch(operation){
//             case "+":
//                 result = valeur1 + valeur2;
//                 break;
//             case "-":
//                 result = valeur1 - valeur2;
//                 break;
//             case "X":
//                 result = valeur1 * valeur2;
//                 break;
//             case "/":
//                 result = valeur1 / valeur2;
//                 break
//         }
//         document.querySelector(".ecran").textContent = result;
//         valeur1 = 0;
//         valeur2 = 0;
//         result = 0;
//     }
// }

// document.querySelector(".del").onclick = ()=>{
//     let rst = document.querySelector(".ecran").textContent;
//     rst = rst.split("");
//     rst.pop();
//     rst = rst.join("")
//     document.querySelector(".ecran").textContent = rst;
// }

// document.querySelector(".c").onclick = () => {
//     valeur1 = 0;
//     valeur2 = 0;
//     result = 0;
//     document.querySelector(".ecran").textContent = ""
// }







let screen = document.querySelector(".ecran");
let operators = document.querySelectorAll(".op");
let numbers = document.querySelectorAll(".nombre");
let egal = document.querySelector(".egal");
let del = document.querySelector(".del");
let clear = document.querySelector(".c");
let val1 = 0;
let operator = "";
let val2 = 0;
let result = 0;


console.log(operators)
console.log(numbers)

for(let number of numbers){
    number.addEventListener("click",()=>{
        screen.innerText +=  number.innerText;
        //  console.log(typeof number.innerText);
    })
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        val1 = screen.innerText;
        operator = operators[i].innerText;
        screen.innerText = "";
    })
}
egal.addEventListener("click", () => {
    val2 = parseInt(screen.innerText);
    switch(operator){
        case "+":
            result = parseInt(val1) + parseInt(val2);
            break;
        case "-":
            result = parseInt(val1) - parseInt(val2);
            break;
        case "X":
            result = parseInt(val1) * parseInt(val2);
            break;
        case "/":
            if(val2 == 0){
                alert("la division sur zero est impossible")
            }else{
                result = parseInt(val1) / parseInt(val2);
            }
            break;
        }
        screen.innerText = result;
})

console.log(clear);
clear.addEventListener("click",()=>{
    screen.innerText = "";
})
del.addEventListener("click",()=>{
    // let newarr =  screen.innerText.split('');
    //  newarr.pop()
    // let newValue = newarr.join('')
    // console.log(newValue);
    // screen.innerText = newValue

    screen.innerText = screen.innerText.slice(0,-1)
    

})

