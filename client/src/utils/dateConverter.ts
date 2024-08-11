function dateConverter(dateString: string) {
  const [day, month, year] = dateString.split(".");
  return `${year}-${month}-${day}`;
}

export default dateConverter;
