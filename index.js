const posts = [
    {
        titel: 'a', body: 'slim'
    },
    { titel: 'b', body: 'fat' }
];
function getposts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((data, index) => {
            output += `<li>${data.titel}</li>`;
        });
       console.log(output);
    }, 1000);
}

function createpost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();

    }, 2000);
}

createpost({ titel: 'c', body: 'skinny' }, getposts);
//getposts();


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }

//   let result = myCalculator(5, 5);
//   myDisplayer(result);

var person={name:"ssm",age:32,address:"abc",phone:{mobile:111,landline:091}};

for(var key in person){
    if(typeof(person[key])==='object'){
        for(var data in person[key]){
            console.log(person);
        }
    }
    console.log(typeof(person[key]));
}