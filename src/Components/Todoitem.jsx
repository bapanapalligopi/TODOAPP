import styles from "./styleitem.module.css"
export default function Todoitem({item,tasks,setTasks})
{
    function handledelete(item)
    {
        //delete selected task
        setTasks(tasks.filter((todo)=>todo.name!==item));
    }
    function handleClick(itemname)
    {
        //chnage the done status of task to opposite
        setTasks(tasks.map((task)=>task.name===itemname?{...task,done:!task.done}:task)      
        );
        
       
    }
    const className=item.done?styles.completed:'';
    return <div className={styles.item}>
        <div className={styles.itemname}>
        <span className={className}onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span><button className={styles.deletebut} onClick={()=>handledelete(item.name)}>X</button></span>
        <hr className={styles.linestyle} />
        </div>
    </div>
}