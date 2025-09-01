import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App1.css";
import ToDoItems from "./Components/ToDoItems";

function App(){
  const  todoItems =[{
    name: "Buy Milk",
    dueDate :"4/10/2023",
  },
  {
    name: "Go To College",
    dueDate: "4/10/2023",
  },
  {
    name : "Dislike",
    dueDate: "right now",
  }
];
  return (<div>
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <ToDoItems todoItems= {todoItems} />
    </center>
  </div>
   
  );
}
export default App;