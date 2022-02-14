//create form to take task and hour input
//create an array and store all the tasks and hours

const taskList = [];
const badList = [];
const hrPerweek = 168;


const handleOnSubmit = (e) => {
    const frmData = new FormData(e);
    const task = frmData.get('task');
    const hr = +frmData.get('hr');
    
    const ttlBadHrs = totalBadHour();
    const total1 = totalTaskHour();
    if(hr < 1){return alert('woohooo! you cannot travel time.')};
    if( ttlBadHrs+total1  > hrPerweek ){
        return alert('cannot add')
    }
    const obj = {
        task,
        hr
    }
    
    taskList.push(obj);
    totalTaskHour();
    display();
    
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
                        <div class="btn btn-warning " title="Mark" onclick="markAsNotToDo(${i})">
                        <i class="fa-solid fa-circle-chevron-right"></i>
                        </div>
        </td>
    </tr>`
    

    });
    document.getElementById('task-list').innerHTML = str;
};
const displayBadList = () => {
    let str ='';
    badList.map((item,i)=>{
        str += ` <tr>
        <td>
            <input type="checkbox">
            ${item.task}
        </td>
        <td> 
        ${item.hr}
        </td>
        <td class="text-end">
        <div class="btn btn-warning " title="Mark" onclick="markAsNotToDo(${i})">
        <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
                        <div class="btn btn-danger" title="Delete" onclick="deleteBadItem(${i})">
                            <i class="fa-solid fa-trash-can" title="Delete"></i>
                        </div>
        </td>
    </tr>`
    

    });
    document.getElementById('bad-list').innerHTML = str;
};
const deleteItem = (i) => {
    taskList.splice(i,1);
    display();
    totalTaskHour();
}
const deleteBadItem = (i) => {
    if(!confirm("Are you sure to delete")){
        return ;
    }
    badList.splice(i,1);
    displayBadList();
    totalTaskHour();
    totalBadHour();
}
const totalTaskHour = () =>{
    const total = taskList.reduce((subttal,item)=>{
         return subttal + item.hr;
        },0);
        const ttlBadHrs = totalBadHour();
        const ttlHrs = total + ttlBadHrs;
        document.getElementById('Total').innerText = ttlHrs;
        return total;
    }
const totalBadHour = () =>{
    const total = badList.reduce((subttal,item)=>{
         return subttal + item.hr;
        },0);
        document.getElementById('BadTotal').innerText = total;
        return total;
        
    }
    const markAsNotToDo = (i) =>{
        const itm = taskList.splice(i,1);
        display();

        badList.push(itm[0]);
        displayBadList();
        totalBadHour();
    }
//loop the array and diplay under the tasks list
// calculate total hours 
//create another list bad list
//count the total hours from the bad list

//delete the task and re calculate the hours
//take tasks from list to bad list vs.

