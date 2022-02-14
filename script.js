//create form to take task and hour input
//create an array and store all the tasks and hours

const taskList = [];
const badList = [];
const hrPerweek = 168;

const handleOnSubmit = (e) => {
    const frmData = new FormData(e);
    const task = frmData.get('task');
    const hr = +frmData.get('hr');

    const obj = {
        task,
        hr
    }

    taskList.push(obj);
    display();
    totalTaskHour();
    

};
const display = () => {
    let str ='';
    taskList.map((item,i)=>{
        str += ` <tr>
        <td>
            <input type="checkbox">
            ${item.task}
        </td>
        <td> 
        ${item.hr}
        </td>
        <td class="text-end">
                        <div class="btn btn-danger" title="Delete" onclick="deleteItem(${i})">
                            <i class="fa-solid fa-trash-can" title="Delete"></i>
                        </div>
                        <div class="btn btn-warning " title="Mark" onclick="moveItem(${i})">
                        <i class="fa-solid fa-circle-chevron-right"></i>
                        </div>
        </td>
    </tr>`
    

    });
    document.getElementById('task-list').innerHTML = str;
};
const deleteItem = (i) => {
    const targetElement = taskList[i];
    taskList.splice(i,1);
    display();
    totalTaskHour();
}
const totalTaskHour = () =>{
    const total = taskList.reduce((subttal,item)=>{
         return subttal + item.hr;
        },0);
        document.getElementById('Total').innerText = total;
        if(total > hrPerweek){
            alert('you cannot go more than '+hrPerweek);
            deleteItem(taskList[taskList.length]);
        }
}


//loop the array and diplay under the tasks list
// calculate total hours 
//create another list bad list
//count the total hours from the bad list

//delete the task and re calculate the hours
//take tasks from list to bad list vs.

