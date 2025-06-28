export function saveTokenLocal(access_token, refresh_token, user) {
  sessionStorage.setItem("access_token", access_token);
  sessionStorage.setItem("refresh_token", refresh_token);
  sessionStorage.setItem("user", JSON.stringify(user));
  console.log(access_token);
}

export function getAccessToken() {
  return sessionStorage.getItem("access_token");
}
