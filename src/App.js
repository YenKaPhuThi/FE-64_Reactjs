import Event from "./components/BindingData/Event";
import Student from "./components/BindingData/Student";
import ConditionIf from "./components/ConditionIf/ConditionIf";
import PractiseState from "./components/ConditionIf/PractiseState";

// import PractiseComponents from "./components/Practise/PractiseComponents";
function App() {
  return (
    <div className="App">
      {/* <PractiseComponents /> */}
      <div className="container">
        <Student />
        <Event />
        <ConditionIf />
        <PractiseState />
      </div>
    </div>
  );
}

export default App;
