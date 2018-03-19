export const formatDate = (date) => {
  const format = new Date(date);
  return format.toDateString();
}
