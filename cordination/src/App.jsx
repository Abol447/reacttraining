import { useRef, useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const locRef = useRef(null);
  const locationhandeller = function (e) {
    setLocation(e.target.value);
  };
  const api = async function () {
    const result = await fetch(
      `https://nominatim.openstreetmap.org/search?q=?${location}&format=json`
    );
    locRef.current = await result.json();
    console.log(locRef.current);
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
      <div>{locRef.current?.map((item) => item.place_id + ",")}</div>
    </div>
  );
}

export default App;
