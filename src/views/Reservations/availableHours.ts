const START_HOUR = 6;
const END_HOUR = 22;

export default () => {
  const hours = [];
  for (let i = START_HOUR; i <= END_HOUR; i++) {
    hours.push(i);
  }
  return hours;
};
