// var store={
//     taskList:[
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskType:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskType:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskType:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskType:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskType:"",
//             taskDescription:""
//         }       
//     ]
// }

const state={
    taskList:[],
};

// DOM operations
const taskContent =document.querySelector(".task__contents");
const taskModal=document.querySelector(".task__modal__body");
// console.log(taskContent);
// console.log(taskModal);

// Tempalte for the card on screen
const htmlTaskContent =({id,title,type,description,url})=>`
   <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
      <div class='card shadow-sm task__card'>
         <div class='card-header d-flex justify-content-end task__card__header'>
           <button type='button' class='btn btn-outline-info mr-1.5'name=${id}>
             <i class='fas fa-pencil' name=${id}></i>
           </button>
           <button type='button' class='btn btn-outline-danger mr-1.5'name=${id} onclick='deleteTask.apply(this,arguments)'>
             <i class='fas fa-trash' name=${id} ></i>
           </button>
         </div>
         <div class='card-body'>
           ${
              // url && 
              // `<img width='100%' src=${url} alt='Card-Image' class='card-img-top md-3'>`
              url ?
              `<img width='100%' src=${url} alt='Card-Image' class='card-img-top md-3'>`
              :
              `<img width='100%' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAC4QAQACAQIEBAQGAwAAAAAAAAABAgMEEQUhMVESEyJBUmFxkSNCgaHB0TIzkv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APoIDo5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM+G3wz9gYAAAAAAAAAAAAAAAAAAAAB202nvqL+GnKI627A548d8t4pjrNrT7QstPwusbTntvPw16fdM0+DHp6eHHH1n3l1ZtakaY8OPF/rx1r9IdN2BFa3pTJG16Vt9Y3Rc3DcF+dN8c/LnH2TAFFqNFmwbzMeKnxVR3pULV8Ppl3ti2pft7S1KzYpx0vgy0tNbY7bx8mFRoAAAAREzMREbzPtAt+F6etMUZpje9uk9oKRAjRamY38mdvnMOF6Wpaa3rNZj2mHpEfW6euowzy9dY3rP8M61iiAaZAAAZpW17xSkb2mdogHTTYL6jLFKfrPaF7hxUw44pSNoj92mk09dNiisc7TztPeXZm1qQARQAAAAAAAHmgG2AABe8PvF9Jj2/LHhn9FE7abU5NNfenOJ61npKVYv2uW8Y8dr26VjdBjiuPbnivE9o2Q9XrL6n07eGkflj+UxdRgGmQABbcM0vl0868eu0emO0InDtN5+XxWj8OnX5z2XSWtSADKgAAAAAAAAAKu3Cr/lzVn612Rs2iz4udqbx3rzXoupjzQvdRo8OfeZr4b/FVVanSZdPO9o8VPa0LqYjgKgAAAA2x0tlyVpSN7WnaGq34ZpvLx+bePXaOXyhKsSsGKuDFXHXpHWe8ugMtAAAAAAAAAAAAAABMRMbTG8ACs1nDtt76ePrT+la9Kh63Q1z73x7VyftZZUsUwzatqWmtomLR1iWGmQEjR6W2pv2pH+VgdOHaXzr+ZePw6z/ANSuWKUrjpFKRtWOkMsWtyAAAAAAAAAAAAAAAAAAAAI+r0mPUxz9N46WhXW4bqInaPDaO8SuRdTFZg4XO++e0bfDX+1lSlcdYrSsVrHSIZE1cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=' alt='Card-Image' class='card-img-top md-3' `
           }
          <h4 class='card-title task__card__title'>${title}</h4>
          <p calss='card-text trim-3-lines text-muted'>${description}</p>
          <div className="tags text-white d-flex flex-wrap">
          <span class='badge bg-primary m-1'>${type}</span>
          </div>
         </div>
         <div className="card-footer">
           <button type="button" class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask" onclick="openTask.apply(this,arguments)">Open Task</button>
         </div>
       
      </div>
   </div>
`;


// Modal body on >> click of open task
const htmlModalContent =({id,title,description,url})=>{
   const date=new Date(parseInt(id));
   return ` 
     <div id=${id}>
     ${
      // url && 
      // `<img width='100%' src=${url} alt='Card-Image' class='img-fluid place__holder__image mb-3'>`
      url ?
              `<img width='100%' src=${url} alt='Card-Image' class='card-img-top md-3'>`
              :
              `<img width='100%' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAC4QAQACAQIEBAQGAwAAAAAAAAABAgMEEQUhMVESEyJBUmFxkSNCgaHB0TIzkv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APoIDo5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM+G3wz9gYAAAAAAAAAAAAAAAAAAAAB202nvqL+GnKI627A548d8t4pjrNrT7QstPwusbTntvPw16fdM0+DHp6eHHH1n3l1ZtakaY8OPF/rx1r9IdN2BFa3pTJG16Vt9Y3Rc3DcF+dN8c/LnH2TAFFqNFmwbzMeKnxVR3pULV8Ppl3ti2pft7S1KzYpx0vgy0tNbY7bx8mFRoAAAAREzMREbzPtAt+F6etMUZpje9uk9oKRAjRamY38mdvnMOF6Wpaa3rNZj2mHpEfW6euowzy9dY3rP8M61iiAaZAAAZpW17xSkb2mdogHTTYL6jLFKfrPaF7hxUw44pSNoj92mk09dNiisc7TztPeXZm1qQARQAAAAAAAHmgG2AABe8PvF9Jj2/LHhn9FE7abU5NNfenOJ61npKVYv2uW8Y8dr26VjdBjiuPbnivE9o2Q9XrL6n07eGkflj+UxdRgGmQABbcM0vl0868eu0emO0InDtN5+XxWj8OnX5z2XSWtSADKgAAAAAAAAAKu3Cr/lzVn612Rs2iz4udqbx3rzXoupjzQvdRo8OfeZr4b/FVVanSZdPO9o8VPa0LqYjgKgAAAA2x0tlyVpSN7WnaGq34ZpvLx+bePXaOXyhKsSsGKuDFXHXpHWe8ugMtAAAAAAAAAAAAAABMRMbTG8ACs1nDtt76ePrT+la9Kh63Q1z73x7VyftZZUsUwzatqWmtomLR1iWGmQEjR6W2pv2pH+VgdOHaXzr+ZePw6z/ANSuWKUrjpFKRtWOkMsWtyAAAAAAAAAAAAAAAAAAAAI+r0mPUxz9N46WhXW4bqInaPDaO8SuRdTFZg4XO++e0bfDX+1lSlcdYrSsVrHSIZE1cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=' alt='Card-Image' class='card-img-top md-3'>`
   }  
   <strong class="text-muted text-sm">Created on ${date.toDateString()}</strong>
   <h2 class='mb-3'>${title}</h2>
   <p class='text-muted'>${description}</p>
      </div>
   `
  };
  

  // We conver JSON to String (i.e is for local storage)
  const updateLocalStorage=()=>{
    localStorage.setItem(
      "task",
      JSON.stringify({
        tasks:state.taskList,
      })
    );
  };

  // where we convert str to JSON (i.e rendering the card in the screen) 
  const loadIntialData=()=>{
    const localStorageCopy= JSON.parse(localStorage.task);
    if(localStorageCopy) state.taskList=localStorageCopy.tasks;

    state.taskList.map((cardDate)=>{
        taskContent.insertAdjacentHTML('beforeend',htmlTaskContent(cardDate));
    });
  };

  // When we edit .... we need to save
  const handleSubmit=(event)=>{
    console.log("event trigger");
        const id=`${Date.now()}`;
        const input={
          url:document.getElementById("imageUrl").value,
          title:document.getElementById("taskTitle").value,
          type:document.getElementById("taskType").value,
          description:document.getElementById("taskDescription").value,
        };
        // if(input.title==="" || input.type==="" || input.description===""){
        //   return alert("Please fill all the necessary fields");
        // };
        taskContent.insertAdjacentHTML("beforeend",htmlTaskContent({...input,id}));
        state.taskList.push({...input,id});
        updateLocalStorage();
  }

// Open Task
const openTask=(e)=>{
  if(!e) e=window.event;

  const getTask=state.taskList.find(({id})=> id === e.target.id);
  taskModal.innerHTML=htmlModalContent(getTask);
}
  
// delete Task

const deleteTask=(e)=>{
  if(!e) e=window.event;

  const targetId = e.target.getAttribute("name");
  // console.log(targetId);
  const type=e.target.tagName;
  // console.log(type);
  const removeTask= state.taskList.filter((id)=> id !== targetId);
  console.log(removeTask);
  updateLocalStorage();
  if(type === "BUTTON"){
    // console.log(e.target.parentNode.parentNode.parentNode.parentNode);
     return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode
     );
  }
  return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
    e.target.parentNode.parentNode.parentNode.parentNode
   );
}
