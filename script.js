
let obj={
    name:'techninika',
    age:20,
    city:'kigali',
    country: 'Rwanda',
    hobbies: ['sports','music','cooking'],
    sayhello: function(){
        console.log("hello");
    }
}
/*console.log(name,age,ibindi);*/

function data(name,iname,...ibindi){console.log(name,iname,ibindi)}
data('achille','songa','kigali','byumba');
function mult(multiplier,...nums){ 
    let numstwo=nums.map((num)=>multiplier*num);
    console.log(numstwo);

}
mult(2,1,2,3,4,53,3,4)


