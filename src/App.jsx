import Counter from "./Counter.jsx"
import OnChangeComponent from "./OnChangeComponent.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  return(
    <>
      <Counter></Counter>
      <br></br>
      <OnChangeComponent></OnChangeComponent>
      <br></br>
      <ColorPicker></ColorPicker>
      <br></br>
      <ToDoList></ToDoList>
    </>
  )
}

export default App;
