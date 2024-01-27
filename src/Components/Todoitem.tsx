import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Todo, Todostate } from "../features/todo/todoSlice";

function Todoitem() {
  const todos = useSelector((state: Todostate) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todoitem</div>
      {todos?.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
}

export default Todoitem;
