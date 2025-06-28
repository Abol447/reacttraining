import { createContext, useContext, useState } from "react";

export const PaginationContext = createContext();
export function Pagination({ number, children, data = [] }) {
  const [PageNum, SetnumPage] = useState(1);
  const [start, setStart] = useState(0);
  const NumberOfPages = Math.ceil(data.length / number);
  const SetnumPageHandeller = function (id) {
    if (id === "next") {
      if (start + number <= data.length) {
        SetnumPage((pre) => pre + 1);
        setStart((pre) => pre + number);
      }
    } else if (id === "before")
      if (start - number >= 0) {
        SetnumPage((pre) => pre - 1);
        setStart((pre) => pre - number);
      }
  };
  return (
    <PaginationContext.Provider
      value={{
        SetnumPageHandeller,
        NumberOfPages,
        PageNum,
        number,
        data,
        start,
      }}
    >
      <div className="w-full">
        <div className="">{children}</div>
      </div>
    </PaginationContext.Provider>
  );
}
export function Body({ render }) {
  const { PageNum, number, data, start } = useContext(PaginationContext);
  return <>{data.slice(start, start + number).map((item) => render(item))}</>;
}

export function Footer({ children }) {
  return (
    <div className="flex items-center justify-between w-full mt-2">
      {children}
    </div>
  );
}
export function NextBtn() {
  const { SetnumPageHandeller } = useContext(PaginationContext);
  return (
    <div
      className="paginationBtn"
      id="next"
      onClick={(e) => SetnumPageHandeller(e.currentTarget.id)}
    >
      next
    </div>
  );
}
export function BeforeBtn() {
  const { SetnumPageHandeller } = useContext(PaginationContext);
  return (
    <div
      className="paginationBtn"
      id="before"
      onClick={(e) => SetnumPageHandeller(e.currentTarget.id)}
    >
      before
    </div>
  );
}
export function Page() {
  const { PageNum, NumberOfPages } = useContext(PaginationContext);
  return <div>{PageNum + " / " + NumberOfPages}</div>;
}
Pagination.Footer = Footer;
Pagination.Body = Body;
Pagination.page = Page;
Pagination.next = NextBtn;
Pagination.before = BeforeBtn;
