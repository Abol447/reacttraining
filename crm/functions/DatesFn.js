const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function CalculateDays(date) {
  //   توی این تیکه ما اول میایم تاریخ امروز رو بدست میاریم
  const today = new Date();
  const formattedDate = getFoematDate(today);
  const date1 = new Date(date); // تبدیل به میلی ثانیه برای تفاضل
  date1.setHours(0, 0, 0, 0); // تایین ساعت نیمه شب تا ساعات باعث اختلاف نشوند
  const date2 = new Date(formattedDate);
  date2.setHours(0, 0, 0, 0);
  const diffTime = date1 - date2;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    return { diffDays, time: "future" };
  } else {
    return { diffDays: diffDays * -1, time: "past" };
  }
}

export function getFoematDate(date) {
  return date.toISOString().split("T")[0];
}
export function spliteInputDate(date) {
  return date.split("T")[0];
}
export function getMonthName(date) {
  const dt = new Date(date);
  return (
    dt.getDate() + " " + monthNames[dt.getMonth()] + " " + dt.getFullYear()
  );
}
export function getDateByDays(day) {
  const today = new Date();
  const finalDate = new Date(today.getTime() - day * 3600 * 24 * 1000);
  return finalDate.toISOString();
}
export function getToday() {
  const date = new Date();
  return spliteInputDate(date.toISOString());
}
