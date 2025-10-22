let textbox=document.querySelector('#textbox');
let submitbtn=document.querySelector('.btn');
let todocontainer=document.querySelector('.todocontainer');
let API="https://68f887b7deff18f212b66756.mockapi.io/api/v1/todos";
submitbtn.addEventListener("click",postdata)

async function fetchdata(){
    let response= await fetch(API);
    let data=await response.json()
    
    if(data){
        todocontainer.innerHTML=''
   
       data.forEach(obj => {
 let div =document.createElement('div');
    div.className='todo';
    div.innerHTML=`
             <p>${obj.text}</p>
        <div>
           <button>edit</button>
           <button>delete</button>
        </div>
 `
       

     todocontainer.append(div);
    });
}
}

async function postdata(){
    let value=textbox.value;
    let objdata={
       text:value.trim()
    }
    let response=await fetch(API,{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(objdata),
    })
    if(response.status===201){
        fetchdata();
    }


}

fetchdata();
