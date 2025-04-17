export function Api(currency) {
  console.log(
    `https://api.currencyapi.com/v3/latest?base_currency=${currency}&currencies=USD`
  );
  return async (dispatch) => {
    dispatch({ type: "isLoading" });
    try {
      const respond = await fetch(
        `https://api.currencyapi.com/v3/latest?base_currency=${currency}&currencies=USD`,
        {
          headers: {
            apikey: "cur_live_6Iyga2sqCoKiLd4TClDcasYq4CptEJPQP9pL8dbG",
          },
        }
      );
      const res = await respond.json();
      console.log(res);
      dispatch({ type: "recive/anwser", payload: res.data.USD.value });
    } catch {
      dispatch({ type: "error" });
    }
  };
}
