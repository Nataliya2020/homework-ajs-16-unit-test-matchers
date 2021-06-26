import returnSortHealth from '../sortHealth';

test('return the sorted list from larger to smaller without data', () => {
  expect(() => returnSortHealth()).toThrow();
});

test('return the sorted list from larger to smaller with empty array', () => {
  expect(() => returnSortHealth([])).toThrow();
});

test('return the sorted list from larger to smaller without zero', () => {
  const result = returnSortHealth([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([{ name: 'мечник', health: 100 }, { name: 'лучник', health: 80 }, { name: 'маг', health: 30 }]);
});

test('return the sorted list from larger to smaller with zero', () => {
  const result = returnSortHealth([
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([{ name: 'лучник', health: 80 }, { name: 'маг', health: 30 }, { name: 'мечник', health: 0 }]);
});

test('return the sorted list from larger to smaller with negative number', () => {
  const result = returnSortHealth([
    { name: 'мечник', health: -100 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([{ name: 'лучник', health: 80 }, { name: 'маг', health: 30 }, { name: 'мечник', health: 0 }]);
});
