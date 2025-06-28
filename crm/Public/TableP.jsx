import React from "react";

export default function TableP({ children }) {
  return <table className="border m-auto border-gray-400">{children}</table>;
}

export function TableHeader({ content = [] }) {
  return (
    <thead className="bg-gray-100">
      <tr>
        {content.map((item, index) => (
          <th
            key={index}
            className="border border-gray-400 px-4 py-2 font-bold text-xl "
            style={{ width: item["width"] }}
          >
            {item["body"]}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export function TableBody({ children }) {
  return <tbody className="bg-white">{children}</tbody>;
}

TableP.Header = TableHeader;
TableP.body = TableBody;
