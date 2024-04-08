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

const htmlTaskContent =({id,title,type,description,url})=>{};

