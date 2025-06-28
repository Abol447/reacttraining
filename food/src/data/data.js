export async function menuitem() {
  const res = await fetch("https://react-fast-pizza-api.jonas.io/api/menu");
  return await res.json();
}

export async function order(newOrder) {
  const res = await fetch("https://react-fast-pizza-api.jonas.io/api/order", {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error('Something went wrong while placing the order.');
  }
  return await res.json();
}
export default async function getorder(id) {
  const res = await fetch(
    `https://react-fast-pizza-api.jonas.io/api/order/${id}`
  );
  return await res.json();
}

export async function location() {
  try {
    const res = await fetch("https://ipinfo.io/json?token=af632e1b0555cd");
    if (!res.ok) throw new Error("failed to get location");
    return await res.json();
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}
