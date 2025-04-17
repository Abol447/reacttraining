import "./App.css";
import Opration from "./Opration";
import Context from "./Context";
import CreateCustomer from "./CreateCustomer";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Context>
        <CreateCustomer />
        <Opration />
      </Context>
    </div>
  );
}

export default App;
