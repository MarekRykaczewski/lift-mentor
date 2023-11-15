import dayjs from "dayjs";

export const generateDates = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrOfDates = [];

  // Prefix Days
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrOfDates.push({ currentMonth: false, date: firstDateOfMonth.day(i) });
  }

  // Current Days
  const todaysDate = dayjs().toDate().toDateString();

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    const currentDate = firstDateOfMonth.date(i);
    arrOfDates.push({
      currentMonth: true,
      today: currentDate.toDate().toDateString() === todaysDate,
      date: currentDate,
    });
  }

  // Suffix Days
  const remaining = 42 - arrOfDates.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i < lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrOfDates.push({ currentMonth: false, date: lastDateOfMonth.date(i) });
  }

  return arrOfDates;
};

export const months = [
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
