/**
 *
 * @param date should be a date ISO string
 * @returns date without the day (ex: Sun Oct 10 2021 => Oct 10 2021)
 */
const toValidDate = (date: string): string => {
    return date && new Date(date).toDateString().split(" ").splice(1, 3).join(" ");
};

export default toValidDate;
