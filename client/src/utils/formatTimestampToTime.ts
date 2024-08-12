export default function formatTimestampToTime(input: string): string {
  const date = new Date(input.split("+")[0]);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12;

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${hours % 12}.${formattedMinutes} ${isAM ? "AM" : "PM"}`;

  return formattedTime;
}
