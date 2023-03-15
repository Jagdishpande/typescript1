let cl=console.log;

//enums:It helps us by giving auto suggestion

enum Roles{
    "Admin",
    "Super_Admin",
    "Candidate"
}

let person={
    fname:"jhon",
    lname:"doe",
    email:"jd@gmail.com",
    userRole:Roles.Super_Admin
}




if(person.userRole===Roles.Super_Admin){
    cl("yes superadmin")
}




// //Tupels >> A fixed length array
// type persontype={
//     fname:string,
//     lname:string,
//     age:number 
//     userRole:[number,string]
// }

// let person:persontype={
//     fname:"jhon",
//     lname:"doe",
//     age:33,
//     userRole:[4,"Admin"]
// }








// type persontype={
//     fname:string,
//     lname:string,
//     age:number
//     hobbies:string[]
//     child:{
//         fname:string,
//         lname:string,
//         age:number
//     }
// }


// let person1:persontype={
//     fname:"jhon",
//     lname:"doe",
//     age:23,
//     hobbies:["coding","cooking","chess"],
//     child:{
//         fname:"may",
//         lname:"doe",
//         age:4
//     }
// }

// for(const hobby of person1.hobbies){
//     cl(hobby.toLowerCase());
// }

// let fvrActivities:string[];

// fvrActivities=["cricket","cooking"]


