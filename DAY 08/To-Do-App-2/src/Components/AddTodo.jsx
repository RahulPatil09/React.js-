function AddTodo (){
    return(
          <center class="todo-container">
    <div class="container text-center">
  <div class="row kg-row">
    <div class="col-6">
      <input type="text" placeholder="Enter the To-Do-Here"/>
    </div>
     <div class="col-4">
      <input type="Date"/>
     </div>
    <div class="col-2">
      <button type="button" class="btn btn-success kg-button">Add</button>
    </div>
  </div>
</div>
</center>
        
    );
}
export default AddTodo;