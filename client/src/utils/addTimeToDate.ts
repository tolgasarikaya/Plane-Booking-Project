export default function addTimeToDate(input: string): string {
  const originalTime = new Date(input.split("+")[0]);
  originalTime.setHours(originalTime.getHours() + 3);
  originalTime.setMinutes(originalTime.getMinutes() + 30);

  const updatedTime = originalTime.toISOString();

  return updatedTime;
}
