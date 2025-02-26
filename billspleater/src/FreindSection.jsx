import { useState } from "react";
import Addfriend from "./Addfriend";
import Friends from "./Friends";

function FreindSection({ info, infoHandeller, infoWindowHandeller }) {
  return (
    <div className="w-[400px] font-sans">
      {info.map((data, index) => (
        <Friends
          name={data.name}
          color={data.color}
          key={index}
          handeller={infoWindowHandeller}
        />
      ))}
      <Addfriend infoHandeller={infoHandeller} />
    </div>
  );
}

export default FreindSection;
