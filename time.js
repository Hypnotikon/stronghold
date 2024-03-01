export function time(sec) {
  let minutes = 0;
  while (sec > 60) {
    minutes++;
    sec -= 60;
  }
  if (sec < 10) {
    return `${minutes}:0${sec}`;
  }
  return `${minutes}:${sec}`;
}
