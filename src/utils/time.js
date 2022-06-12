export function getHummanDuration(duration) {
  let result = '';
  if (duration > 60) {
    const hours = Math.floor(duration / 60);
    duration -= hours * 60;
    result += hours + 'ч ';
  }
  if (duration > 0) {
    result += duration + 'м';
  }
  return result
}