export const getuserData = function () {
  const user = sessionStorage.getItem("user");
  if (user && user != "undefinde") {
    const userData = JSON.parse(user);
    return userData.user_metadata;
  }
  return "";
};
