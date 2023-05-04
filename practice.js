// class Iam {
//     b="I am new"
//      name() {
//        let a="I am in name"
//        console.log(a); 
//     }

//     name2(){
//         return this.b;

//     }
// }

// let i=new Iam();
// console.log(i.name2());
// console.log("jj");
// //________________________________________________________________________________
// //let z="var z"

// function zval(){
//      return "I am z";
// }

// function getZval(){
//     return zval();
// }

// console.log(getZval());
// //______________________________________________________________________________________

// let obj={a:1, b:2}

// let {b,a}=obj;

// console.log(a);

// let a=true
// let b=2;
// let c=3;
// console.log(b&&a&&c);
//_____________________________________________________________________________________________
// a= "3-FontEvent";
// console.log(a.toString());


function a(){
    console.log("I am in a")
}

function b(){
    console.log("I am in b")
}


function c(callback){
    setTimeout(()=>{b();callback();},1000);
    
}

c(a);



