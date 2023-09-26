function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export const getTodaysDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = padTo2Digits(date.getMonth() + 1);
  const day = date.getDate();
  const todaysDate = [year, month, day].join("-");
  return todaysDate;
};
