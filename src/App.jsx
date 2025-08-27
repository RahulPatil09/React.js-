import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import "./App1.css";
function App(){
  return (<div>
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
      <ToDoItem1 />
      <ToDoItem2 />
      </div>
    </center>
  </div>
   
  );
}
export default App;