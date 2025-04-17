import "./App.css";
import CreateCustomer from "./customer/CreateCustomer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Opration from "./operation/Opration";

function App() {
  return (
    <div className="mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateCustomer />} />
          <Route path="operation" element={<Opration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
