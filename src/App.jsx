import Counter from "./Counter.jsx"
import OnChangeComponent from "./OnChangeComponent.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ToDoList from "./ToDoList.jsx";
import ComponentA from "./ComponentA.jsx";
import StopWatch from "./StopWatch.jsx";

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
      <br></br>
      <ComponentA></ComponentA>
      <br></br>
      <StopWatch></StopWatch>
    </>
  )
}

export default App;
