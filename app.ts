  let cl=console.log;

// // enum Roles{
// //     Admin="Admin",
// //     Super_Admin="Super_Admin",
// //     Candidate="Candidate"
// // }

// // type peoples={
// //     fname:string,
// //     lname:string,
// //     age:number,
// //     Roles:string
// // }


// // let person:peoples={
// //     fname:"jhon",
// //     lname:"doe",
// //     age:34,
// //     Roles:"Admin"
// // }


// // if(person.Roles===Roles.Admin){
// //     cl("person is Admin")
// // }

// // let person2:peoples={
// //     fname:"may",
// //     lname:"doe",
// //     age:23,
// //     Roles:Roles.Candidate
// // }

// // if(person2.Roles===Roles.Candidate){
// //     cl("person is candidate")
// // }


// // let person3={
// //     fname:"june",
// //     lname:"doe",
// //     age:22,
// //     Roles:Roles.Super_Admin
// // }

// // if(person3.Roles===Roles.Super_Admin){
// //     cl("person 3 is super_Admin")
// // }


// //uniontype

// type combinable=number|string

// let x:combinable;  //In x now we can store both data number as well as string

// let y=x=23
// x="twenty three"
// cl(y)


// function add(n1:combinable,n2:combinable){
//     if(typeof n1==="number"&& typeof n2==="number"){
//         return n1+n2
//     }else{
//         return n1.toString()+n2.toString()
//     }
// }

// let ad=add("dd",2)
// cl(ad)


// //Type assertion

// let i=10;

// //now here in i number is assigned and the datatype of i is number automatically datatype of i is also number
// //and it is called as type assertion

// //literal type


// const z=50 // its type is 50number
// const u="60" // its type is 60string


// //custom literal type

// type mainskill="javascript";

// let a:mainskill="javascript"


//@@@@@@@@@@@@@@@@@@@@@@@@@@



// type combinabal=number|string; //==> this is union of string and number
// //convertion:"This is string"|"This is number" => this is union of literal 
// function addion(num1:combinabal,num2:combinabal,convertion:"This is string"|"This is number"){
//    let result;
//     if(typeof num1==="number" && typeof num2==="number"){
//         result= num1+num2
//     }else{
//         result= num1.toString()+num2.toString()
//     }
//     if(convertion==="This is string"){
//         return result.toString()
//     }
//     if(convertion==="This is number"){
//         return Number(result)
//     }

// }


// let first=addion(3,3,"This is string");
// cl(first)

// let second=addion("33","33","This is number")
// cl(second)


//############$$$$$$$$$$$$@@@@@@@@@@@@@@%%%%%%%%%%%%%##############

//function return type


function add(n1:number,n2:number):number{  //this function will now return number
    return n1+n2
}


function add2(n1:number,n2:number):string{  //this fuction will now return string
    return (n1+n2).toString()
}

















