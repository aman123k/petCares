const day = (time: string) => {
  const today = new Date();
  const inputDate = new Date(time);

  // Check if input date is today
  if (inputDate.toDateString() === today.toDateString()) {
    return `Today`;
  }

  // Calculate yesterday's date
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  // Check if input date is yesterday
  if (inputDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  // Display date in MM/DD/YYYY format
  const formattedDate = `${inputDate.getDate()}/ ${inputDate.getMonth()} /${inputDate.getFullYear()}`;
  return formattedDate;
};
export default day;
