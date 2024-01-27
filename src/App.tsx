import "./App.css";
import { Todoform } from "./Components";
import Todoitem from "./Components/Todoitem";

function App() {
  return (
    <>
      <div>Todo list app</div>
      <Todoform />
      <Todoitem />
    </>
  );
}

export default App;
