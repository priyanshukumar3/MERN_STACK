function addTask() {
    //Acess Ul tag
    const taskList = document.getElementById("list");
    // Input tag
    const task = document.getElementsByName("Task")[0].value;

    console.log(task);

    // Create a <li>

    const list = document.createElement("li");
    list.innerHTML = `
    <span>${task}</span>
    <button id="deleteTask">Delete</button>
    `;

    const deleteBtn = list.querySelector("button");
    deleteBtn.addEventListner('click', () => {
        taskList.removeChild(list);
    })

    // Add in task List
    taskList.appendChild(list);

    // Erase input text
    document.getElementsByName("Task")[0].value="";
}



//    Another working code :-
// function addTask() {
//   //Ul tag
//   const taskList = document.getElementById("list");
//   //Input tag
//   const task = document.getElementsByName("Task")[0].value;

//   //create a <li>

//   const list = document.createElement("li");
//   list.innerHTML = `
//   <span>${task}</span>
//   <button class="deleteBtn">Delete</button>
//   `;

//   //Add in task List
//   taskList.appendChild(list);

//   //Erase input text
//   document.getElementsByName("Task")[0].value = "";

//   //delete task event listner
//   list.querySelector(".deleteBtn").addEventListner("click", () => {
//     taskList.removeChild(list);
//   });
// }