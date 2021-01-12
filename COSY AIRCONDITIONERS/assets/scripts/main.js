
// const myHeading=document.querySelector('h1');
// myHeading.textContent='Hello World';


// almightyFormulae
// function almightyFormulae(a,b,c){
//     let sqrt=((b*b)-4*a*c)^0.5;
//     let positive=(-b+sqrt)/(2*a);
//     let negative=(-b-sqrt)/(2*a);
//     return "x = "+ positive+" or "+negative;
// }
// let x=almightyFormulae(-3,14,7);
// console.log(x);

// let myImage=document.querySelector('img');
// myImage.onhover =function changeImage(){
//     let oldSrc=myImage.getAttribute('src');
//     if(oldSrc==='assets/images/POLYSTAR 1 HP WINDOW Air Conditioner.jpg'){
//         myImage.setAttribute('src','assets/images/polystar floor standing portable air cooler.jpg');
//     }
//     else{
//         myImage.setAttribute('src','assets/images/POLYSTAR 1 HP WINDOW Air Conditioner.jpg');
//     }
// }
let myHeading=document.querySelector('h1');
function welcomeMessage(){
    let myName=prompt('Please Enter Your Name');
    localStorage.setItem('name',myName);
    myHeading.textContent='Welcome To My Webpage '+myName;
}



