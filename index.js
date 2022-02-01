var limit=25;
var page=1;
var index=1;
let container=document.querySelector('.container');
const display=async()=>{
 let response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${page}`);
 let data=await response.json();
 data.map(el=>{
     let htmlData=`<div class="item">
     <h2>${index++}</h2>
     <h3>${el.title}</h3>
     <p>${el.body}</p>>
 </div>`
 container.insertAdjacentHTML('beforeend',htmlData);
 })
}
display();
window.addEventListener('scroll',()=>{
 
   
    if(Math.floor(document.documentElement.scrollTop+document.documentElement.clientHeight)>=document.documentElement.scrollHeight-2000){
       showData()
       
    }
})
const showData=()=>{
    setTimeout(()=>{
        console.log("Hello")
        page++;
        display();
    },300)
   
}