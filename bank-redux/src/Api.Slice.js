const initionalstate = {
  anwser: "",
  error: false,
  loading: false,
};

export default function Apireducer(state = initionalstate, action) {
  switch (action.type) {
    case "recive/anwser":
      return { ...state, anwser: action.payload, loading: false };
    case "isLoading":
      return { ...state, loading: true };
    case "error":
      return { ...state, error: true };
    default:
      return state;
  }
}
