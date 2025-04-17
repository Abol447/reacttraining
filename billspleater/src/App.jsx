import "./index.css";
import "./App.css";
import FreindSection from "./FreindSection";
import BillSection from "./billSection";
import { useState } from "react";
function App() {
  const [info, setInfo] = useState([]);
  const infoHandeller = function (inf) {
    setInfo((data) => [...data, inf]);
  };
  const [infoWindow, setinfoWindow] = useState(false);
  const infoWindowHandeller = function (e) {
    setinfoWindow(!infoWindow);
    setInfo((data) =>
      data.map((perData) =>
        perData.name == e.target.id
          ? { ...perData, flag: !infoWindow }
          : perData
      )
    );
  };
  return (
    <div className="flex  w-[800px] mx-auto my-[50px] items-center gap-1">
      <FreindSection
        info={info}
        infoHandeller={infoHandeller}
        infoWindowHandeller={infoWindowHandeller}
        infoWindow={infoWindow}
      />
      <BillSection infoWindow={infoWindow} info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
