const depositInfo = {
  deposit: 0,
  loan: 0,
  whitdraw: 0,
  currency: "",
  loanpurpes: "",
};
export default function operationReduser(state = depositInfo, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, deposit: Number(action.payload) };
    case "loan":
      return {
        ...state,
        loan: Number(action.payload),
      };
    case "currency":
      return { ...state, currency: action.payload };
    case "loanpurpes":
      return { ...state, loanpurpes: action.payload };
    case "whitdraw":
      return { ...state, whitdraw: Number(action.payload) };
    default:
      return state;
  }
}
