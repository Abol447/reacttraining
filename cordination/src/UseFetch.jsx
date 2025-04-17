async function useFetch() {
  const result = fetch(
    "https://nominatim.openstreetmap.org/search?q=?Qom&format=json"
  );
  const out = await JSON.parse(result);
  console.log(out);
}

export default useFetch;
