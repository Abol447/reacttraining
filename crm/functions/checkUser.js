export function checkUser() {
  const userData = sessionStorage.getItem("user");
  if (userData && userData !== "undefined") {
    const user = JSON.parse(userData);
    if (user && user.role === "authenticated") return true;
  }
  return false;
}
