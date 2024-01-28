import {useState} from "react";
import styles from "./form.module.css";
export default function Form({tasks,setTasks})
{
    //give the value for task 
    const [task, setTask]= useState({name:'',done:false});
    //function for handling submit
    function handleSubmit(e)
    {
        e.preventDefault();
        //retain the previous item as well so use spread operator on tasks
        //for current todo use task
        setTasks([...tasks,task]);
        setTask({name:'',done:false});

    }

    return <div>
        <div className={styles.inputcontainer}> 
        <form className={styles.todoform} onSubmit={handleSubmit}>
                <input type="text" value={task.name} onChange={(e)=>setTask({name:e.target.value,done:false})} className={styles.inputstyle} placeholder="Enter todo item"required/>
                <button type="submit" className={styles.stylebutton}>Add</button>
            </form>
        </div>
        
    </div>
}