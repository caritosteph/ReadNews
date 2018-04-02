export const formatDate = (date) => {
  const format = new Date(date);
  return format.toDateString();
}

export const authToken = (date) => {
  return Math.random().toString(36).substr(-8);
}
