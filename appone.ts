let cl=console.log;

type Tperson={     //customtype 
    fname:string,
    lname:string,
    age:number
}

let person:Tperson={
    fname:"jhon",
    lname:"doe",
    age:33
}

let person2:Tperson={
    fname:"july",
    lname:"doe",
    age:2
}




// function add(n1:number, n2:number,printresut:boolean,phrase:string){
//     if(printresut===true){
//         cl(`${phrase}${n1+n2}`)
//     }else{
//         return phrase+n1+n2
//     }
// }

// add(10,10,true,"this is answer")




// const num1=document.getElementById("num1")as HTMLInputElement
// const num2=document.getElementById("num2")as HTMLInputElement;
// const add=document.getElementById("add")!;

// const addition=(n1:number,n2:number)=>{
//     cl(n1+n2)
// }



// add.addEventListener("click",()=>{
//     addition(+num1.value, +num2.value)
// })

// cl("hello")

// cl("heeloo ther im jjhoh")