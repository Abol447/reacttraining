import "./App.css";
import Slider from "./Slider";
const info = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  return <>{<Slider data={info} lenght={6} />}</>;
}

export default App;
