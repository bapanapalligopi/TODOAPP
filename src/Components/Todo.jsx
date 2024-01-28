import React from "react";
import {useState} from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import Todoslist from "./Todoslist";
import Footer from "./Footer";
export default function Todo()
{
     //store the all the todos list of todos
    const [tasks,setTasks]= useState([]);
    const countofcompletedtodos=tasks.filter((task)=>task.done).length;
    const alltodos=tasks.length;
    return (
        <div>
            <Form tasks={tasks} setTasks={setTasks}></Form>
            <Todoslist tasks={tasks} setTasks={setTasks}></Todoslist>
             <Footer totaltodos={alltodos}completedtodos={countofcompletedtodos}></Footer>
        </div>
    );
}