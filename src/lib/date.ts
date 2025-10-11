export const getDateDetails = (dateString: string | undefined) => {
  if (!dateString) {
    return {
      day: "",
      count: "",
      month: "",
    };
  }
  const date = new Date(dateString);

  // Options for getting the full day name
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  // Options for getting the full month name
  const monthName = date.toLocaleDateString("en-US", { month: "long" });

  const dayCount = dateString.split("-").pop();

  return {
    day: dayName,
    count: dayCount,
    month: monthName,
  };
};
