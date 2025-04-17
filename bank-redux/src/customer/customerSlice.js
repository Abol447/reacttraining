const initionalState = {
  name: "",
  id: "",
};
export default function customerReducer(state = initionalState, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "id":
      return { ...state, id: action.payload };
    default:
      return state;
  }
}
