function f1(){
    return new Promise((resolvePath,reject)=>{
        reject("spmething went wrong");
    });
}
function f2(x){
    console.log(x+7);
}
f1()
.then((n)=>f2(n))
.catch((err)=>console.log(err));

function f1(){
    return new Promise((resolvePath,reject)=>{
        reject("spmething went wrong");
    });
}
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>{
    data.map.value=>{
        console.log(value.name,value.email)
    }})

.catch((err)=>console.log(err));