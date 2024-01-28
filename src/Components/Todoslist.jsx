import Todoitem from "./Todoitem";
import styles from "./styletodolist.module.css"
export default function Todoslist({tasks,setTasks})
{
    const sortedtasks= tasks.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return <div className={styles.Styletodolist}>
        {sortedtasks.map((item)=><Todoitem key={item.name} item={item} tasks={sortedtasks} setTasks={setTasks}/>)}
    </div>
}