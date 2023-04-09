const dateOnly = (date) => {
  const dateObject = new Date(date);
  return dateObject.toISOString().substring(0, 10);
};

export default dateOnly;
