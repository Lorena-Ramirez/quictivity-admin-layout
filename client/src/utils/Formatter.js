export const formatTime = (seconds) => {
  let cm = "00";
  let cs = "00";
  const prependZero = (value) => (value.length === 1) ? `0${value}` : value;

  if (seconds) {
    var minutesValue = Math.floor(seconds / 60).toString();
    var secondsValue = (seconds % 60).toString();
    cm = prependZero(minutesValue);
    cs = prependZero(secondsValue);
  }
  return `${cm}:${cs}`;
}