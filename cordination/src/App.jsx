import { useRef, useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [loc, setLoc] = useState([]);
  const [load, setload] = useState(false);
  const locationhandeller = function (e) {
    setLocation(e.target.value);
  };
  const api = async function () {
    setload(true);
    const result = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
    );
    setLoc(await result.json());
    setload(false);
  };
  return (
    <div className="flex flex-col w-[200px] p-5 font-mono">
      <input
        type="text"
        value={location}
        onChange={locationhandeller}
        className="px-2 border-2 border-red-950"
        placeholder="your city"
      />
      <button
        onClick={api}
        className="border-2 border-red-950 px-2 py-1   mt-2 bg-red-100"
      >
        get my position
      </button>
      <div>
        {!load ? loc.map((item) => item.place_id + ",") : "is worcking"}
      </div>
    </div>
  );
}

export default App;
