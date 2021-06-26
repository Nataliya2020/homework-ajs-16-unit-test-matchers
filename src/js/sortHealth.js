export default function returnSortHealth(arr) {
  if (!arr || arr.length === 0) {
    throw new Error('Данных нет');
  }

  arr.forEach((item) => {
    if (item.health < 0) {
      item.health = 0; // eslint-disable-line no-param-reassign
    }
  });

  return arr.sort((a, b) => (a.health < b.health ? 1 : -1));
}
