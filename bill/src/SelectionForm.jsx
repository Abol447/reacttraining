const bill = [10, 20, 30];
function SelectionBill({ children, m, setm }) {
  return (
    <div className="slcBill">
      {" "}
      {children}
      <select value={m} onChange={(e) => setm(e.target.value)} className="slc">
        {bill.map((percernt) => (
          <option value={percernt} key={percernt}>
            {percernt}%
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectionBill;
