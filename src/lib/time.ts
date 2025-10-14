export const convertToAmPm = (timeString: string) => {
  if (!timeString || timeString.length !== 5) return "";

  // Split the string into hours and minutes
  const [hourString, minuteString] = timeString.split(":");
  let hours = parseInt(hourString, 10);
  const minutes = minuteString;
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format the hour string (add leading zero if necessary, though usually not needed after the % 12 operation unless you want '07' instead of '7' for 7 AM)
  const hourAmPm = hours.toString().padStart(2, "0");

  return `${hourAmPm}:${minutes} ${ampm}`;
};
