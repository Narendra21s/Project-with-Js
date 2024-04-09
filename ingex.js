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
const htmlTaskContent =({id,title,type,description,url})=`
   <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
      <div class='card shadow-sm task__card'>
         <div class='card-header d-flex justify-content-end task__card__header'>
           <button type='button' class='btn btn-outline-info mr-1.5'name=${id}>
             <i class='fas fa-pencil' name=${id}></i>
           </button>
           <button type='button' class='btn btn-outline-danger mr-1.5'name=${id}>
             <i class='fas fa-trash' name=${id}></i>
           </button>
         </div>
         <div class='card-body'>
           ${
              url && 
              `<img width='100%' src=${url} alt='Card-Image' class='card-img-top md-3'>`
           }
          <h4 class='card-title' task__card__title>${title}</h4>
        //   class='text-muted' => text color in grey color
          <p calss='card-text trim-3-lines text-muted'>${description}</p>
          <div className="tags text-white d-flex flex-wrap">
          <span class='badge bg-primary'>${type}</span>
          </div>
         </div>
         <div className="card-footer">
           <button type="button" class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
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
      url && 
      `<img width='100%' src=${url} alt='Card-Image' class='img-fluid place__holder__image mb-3'>`
   }  
   <strong class="text-muted text-sm">Created on ${date.toDateString()}</strong>
   <h2 class='mb-3'>${title}</h2>
   <p class='text-muted'>${description}</p>
      </div>
   `
  };

  const updateLocalStorage=()=>{
    localStorage.setItem(
      "tasky",
      JSON.stringify({
        tasks:state.taskList,
      })
    );
  };

  