import './App.css';
import {useState} from 'react';
import {Task} from './Task';

function App() {
  const [todoList , setToDoList] = useState([]);
  const [newTask , setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  // const addTask = () => {
  //   // const newToDoList = [...todoList , newTask]
  //   setToDoList([...todoList , newTask]);
  // };

  const addTask = () => {
    const task = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName : newTask,
      completed : false
    }
    setToDoList([...todoList , task]);
  };


  // const deleteTask = (taskName) => {
  //   // const newTodoList = todoList.filter((task)=>{
  //       // if(task === taskName){
  //       //   return false
  //       // }else{
  //       //   return true
  //       // }
  //       // (or)  return task !== taskName;
  //   // });
  //   // setToDoList(newTodoList);

  //   setToDoList(todoList.filter((task)=> task !== taskName))

  // };

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task)=> task.id !== id))
  };

  const completeTask = (id) => {
    setToDoList(todoList.map((task)=> {
      if(task.id === id){
          return {...task , completed:true}
        }else{
          return task
        }
    })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task)=> {
          // return (
            // <div className="task">
            //     <h1>{task} {task.id}</h1>
            //     <button onClick={() => deleteTask(task)}>X</button>
            // </div>
        //     <div className="task">
        //     <h1>{task.taskName} {task.id}</h1>
        //     <button onClick={() => deleteTask(task.id)}>X</button>
        // </div>
            
          // )
          return <Task 
                  taskName={task.taskName} 
                  id={task.id} 
                  completed = {task.completed}
                  deleteTask={deleteTask}
                  completeTask = {completeTask}
                  />;
        })}
      </div>
    </div>
  );
}

export default App;
