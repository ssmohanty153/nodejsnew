const posts=[
    {
        titel:'a',body:'slim'},
        {titel:'b',body:'fat'}
];
function getposts(){
    setTimeout(()=>{
    let output='';
    posts.forEach((data,index)=>{
        output+=`<li>${data.titel}</li>`;
    });
    document.body.innerHTML=output;
},1000);
}

function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);
        const error=false;

        if(!error){
            resolve();
        }
        else{
            reject('error');
        }
        },2000);
    });
}

const promise1=Promise.resolve('hello');
const promise2=10;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'goodboy')
);
const promise4=fetch('./index.txt').then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));