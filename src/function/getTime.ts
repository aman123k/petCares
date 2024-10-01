const getTime = (time: string) => {
  const today = new Date();
  const inputDate = new Date(time);

  // Check if input date is today
  if (inputDate.toDateString() === today.toDateString()) {
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${String(minutes).padStart(2, "0")} ${amOrPm}`;
  }

  // Calculate yesterday's date
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  // Check if input date is yesterday
  if (inputDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  // Display date in MM/DD/YYYY format
  const formattedDate = `${inputDate.getDate()}/${inputDate.getMonth()}/${inputDate.getFullYear()}`;
  return formattedDate;
};
export default getTime;
